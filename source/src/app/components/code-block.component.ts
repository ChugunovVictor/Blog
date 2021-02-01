import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

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
  ]
})
export class CodeBlockComponent implements AfterViewInit {

  code: string = "";
  @ViewChild('wrapper') content: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.code = this.content.nativeElement.innerHTML.trim();
  }

}
