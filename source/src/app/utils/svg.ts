export class WrapperSVG {
    element: SVGElement;
  
    constructor(type) {
      this.element = document.createElementNS("http://www.w3.org/2000/svg", type);
    }
  
    curryingAttr = attr => value => this.element.setAttribute(attr, value)
  
    setAttrs(...attrValue) {
      let cur;
      for (let value of attrValue) {
        if (cur == undefined) {
          cur = this.curryingAttr(value);
        } else {
          cur = cur(value)
        }
      }
      return this;
    }
  
    append(child) {
      this.element.appendChild(child)
      return this;
    }
  
    compile() {
      return this.element
    }
  }
  
export class Point{
    x:number; y: number;
    constructor(x, y){
      this.x = x;
      this.y = y;
    }
  }
  
export class QueueElement {
    id: string;
    parent: string;
    background: string;
    in: Point;
    out: Point;
  
    constructor(id: string, parent: string, background: string = '#FFF'){
      this.id = id;
      this.parent = parent;
      this.background = background;
    }
  }