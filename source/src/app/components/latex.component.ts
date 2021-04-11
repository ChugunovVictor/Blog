import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-latex',
  template: `
    <div #wrapper style="display: none">
      <!-- transclusion slot -->
      <ng-content></ng-content>
    </div>
    <ng-katex-paragraph [paragraph]="code"></ng-katex-paragraph>
  `,
  styles: []
})
export class LatexComponent implements AfterViewInit {
  code: string = "";
  @ViewChild('wrapper') content: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.code = '$'+this.content.nativeElement.innerText.trim().replaceAll('\n', '')+'$';
  }

}
