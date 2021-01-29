import { Component } from '@angular/core';
import {MathContent} from "./MathJax/MathContent";

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div [appMath]="mathLatex"></div>

    <div [appMath]="mathMl"></div>

    <!-- will render inline element math -->
    <div [appMath]>
      $E = mc^2$
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  mathLatex: MathContent = {
    latex: 'When $a \\ne 0$, there are two solutions to $\\frac{5}{9}$'
  };

  mathMl: MathContent = {
    mathml: `<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow>
    <mover>
      <munder>
        <mo>∫</mo>
        <mn>0</mn>
      </munder>
      <mi>∞</mi>
    </mover>
    <mtext> versus </mtext>
    <munderover>
      <mo>∫</mo>
      <mn>0</mn>
      <mi>∞</mi>
    </munderover>
  </mrow>
</math>`
  };
}
