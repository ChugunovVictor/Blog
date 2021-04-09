import {Input, Component, HostBinding} from '@angular/core';
import { OnDynamicMount, OnDynamicData, DynamicContentChild } from 'ngx-dynamic-hooks';

@Component({
  selector: 'app-tab-block', 
  template: `
    <ng-content></ng-content>
  `,
  styles: [
  ]
})

export class TabBlockComponent{
  @HostBinding('attr.header') @Input() header;
  constructor() { }
}
@Component({
  selector: 'app-tabs', 
  template: `
  <div class="tab">
    <span class="tablinks" (click)="open(t)" *ngFor="let t of headers">{{t}}</span>
  </div>
  <ng-content></ng-content>
  `,
  styles: [
    `.tab {
      overflow: hidden;
    }`, `.tablinks {
      float: left;
      cursor: pointer;
      padding: 8px 16px;
      font-size: 17px;
    }`, `.tablinks:not(:last-child) {
      border-right: solid 1px black;
    }`, `.tablinks:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }`
  ]
})
export class TabsComponent implements OnDynamicMount {
  headers = []
  contentChildren: DynamicContentChild[] 

  constructor() { }
  // @ContentChildren(forwardRef(() => TabBlockComponent), { descendants: true }) elements;
  
  onDynamicMount(data: OnDynamicData): void {
    this.contentChildren = data.contentChildren;
    for(let i in this.contentChildren){
      let native = this.contentChildren[i].componentRef.location.nativeElement
      this.headers.push(native.getAttribute('header'))
      if(Number(i) !== 0)
        native.style.setProperty('display', 'none')
    }
  }

  open(title: string){
    for(let i in this.contentChildren){
      let native = this.contentChildren[i].componentRef.location.nativeElement
      if(title !== native.getAttribute('header'))
        native.style.setProperty('display', 'none')
      else 
        native.style.setProperty('display', 'block')
    }
  }
}
