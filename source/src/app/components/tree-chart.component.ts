import { HttpClient } from '@angular/common/http';
import { Input, Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { WrapperSVG, QueueElement, Point } from '../utils/svg';

@Component({
  selector: 'app-tree-chart',
  template: `
  <div #wrapper style="display: none">
    <!-- transclusion slot -->
    <ng-content></ng-content>
  </div>
  <svg #svg style="width:100%">
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
        <polygon points="0 0, 5 3.5, 0 7" />
      </marker>
    </defs>
  </svg>
  `,
  styles: []
})
export class TreeChartComponent implements AfterViewInit {
  @ViewChild('wrapper') content: ElementRef;
  @ViewChild('svg') svg: ElementRef;
  @Input() src: string = '';

  /* 
    id : children is redundant - to find roots there are unnecessary actions
    defining parent much more convenient, so id : parent
    { 
      "1": { "parent":"" },
      "2": { "parent":"1" },
      "3": { "parent":"1" },
      "4": { "parent":"3" }
      } */
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  block(text): Array<SVGElement> {
    let groupTag = new WrapperSVG("g");
    let rectTag = new WrapperSVG("rect").setAttrs("x", 0, "y", 0, "rx", 5, "fill", "none", "stroke", "black").compile();

    let textContent = document.createTextNode(text);
    let textTag = new WrapperSVG("text").setAttrs("x", 5, "y", 20).append(textContent).compile();
    return [ groupTag.append( rectTag ).append( textTag ).compile(), textTag, rectTag /* we could adjust width only after adding textTag into svg */ ]
  }

  path(x1, y1, x2, y2): SVGElement{
   let dx = Math.abs(x1 - (x1 - x2) / 2)
   let dy = Math.abs(y1 - (y1 - y2) / 2)
   return new WrapperSVG("path").setAttrs("stroke", "black", "fill", "none",
   "d",`M ${x1},${y1}
        C ${x1},${dy} ${dx},${dy} ${dx},${dy}
          ${dx},${dy} ${x2},${dy} ${x2},${y2-5}`,
   "marker-end","url(#arrowhead)").compile();
  }

  getContent(): Observable<string>{
    if(this.src){
      return this.route.queryParams.pipe(
        flatMap(params => this.http.get("./assets/table_of_contents/" + params['path'] + "/" + this.src, {responseType: 'text'}))
      )
    }
    else return of(this.content.nativeElement.innerText.trim())
  }

  ngAfterViewInit() {
    const levelOffset = 30;
    const height = 30;
    const levelPadding = 30;
    const width = this.svg.nativeElement.parentElement.offsetWidth

    this.getContent().subscribe(json => {
      console.log(json)
      let diagram = JSON.parse(json);
    
      let levels = Array()
      let blocks = new Map()
  
      // @ts-ignore
      levels[0] = Object.entries(diagram).filter(element => element[1].parent == "").map(element => new QueueElement( element[0], element[1].parent, element[1].background) )
  
      for(let level = 0; level < levels.length; level++){
        let queue = levels[level]
        let horizontalOffset = width / ( queue.length + 1 );
        for(let i = 0; i < queue.length; i++){
          let element = queue[i];
          let [ groupTag, textTag, rectTag ] = this.block(element.id);
          this.svg.nativeElement.appendChild( groupTag )
    
          let point_y = level * levelOffset + level * levelPadding
          let point_x = (i+1)*horizontalOffset + (textTag.clientWidth + 5) / 2
          element.in = new Point(point_x, point_y)
          element.out = new Point(point_x, point_y + height)
  
          groupTag.setAttribute("transform", `translate(${(i+1)*horizontalOffset}, ${point_y})`)
          rectTag.setAttribute("width", textTag.clientWidth + 5 + "")
          rectTag.setAttribute("height", `${height}` /*textTag.clientHeight*/)
          rectTag.setAttribute("fill", `${element.background}`)
  
          // @ts-ignore
          let children = Object.entries(diagram).filter(c => c[1].parent == element.id).map(c => new QueueElement( c[0], c[1].parent, c[1].background))
          levels[level + 1] = levels[level + 1] ? levels[level + 1].concat(children) : children 
          
          blocks.set(element.id, element)
        }
      }
  
      for(let block of blocks.values()){
        if(block.parent && blocks.get(block.parent)){
          let parent = blocks.get(block.parent)
          let path = this.path(parent.out.x, parent.out.y, block.in.x, block.in.y)
          this.svg.nativeElement.appendChild(path)
        }
      }
  
      this.svg.nativeElement.setAttribute("height", `${levels.length * levelOffset + levels.length * levelPadding}`)
    })
  }
}
