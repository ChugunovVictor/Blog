import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';

// contenteditable="true"

@Component({
  selector: 'app-code-block',
  template: `
    <div #wrapper style="display: none">
      <!-- transclusion slot -->
      <ng-content></ng-content>
    </div>
    <pre>
      <code [highlight]="code" [lineNumbers]="true"></code>
    </pre>
  `,
  styles: [
    'pre { margin: 0; }',
  ]
})
export class CodeBlockComponent implements AfterViewInit {
  code: string = "";
  @ViewChild('wrapper') content: ElementRef;
  @Input() src: string;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    if(this.src){
      this.route.queryParams.pipe(
        flatMap(params => this.http.get("./assets/table_of_contents/" + params['path'] + "/" + this.src, {responseType: 'text'}))
      ).subscribe(data => this.code = data)
    }
    else this.code = this.content.nativeElement.innerText.trim();
  }

}
