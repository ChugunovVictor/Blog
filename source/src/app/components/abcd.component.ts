import {Component} from '@angular/core';

@Component({
    selector: 'app-abcd-component',
    template: `
        <div class="abcd-holder">
            <div *ngFor="let symbol of codes"
                [title]="symbol.title"
                [innerHTML]="symbol.code">
            </div>
        </div>
        
    `,
    styles: [
            `:host {
            width: 20px;
            margin: 8px;
            position: relative;
            height: 100vh;
        }`,
            `:host:before {
            content: "";
            float: left;
            background: black;
            width: 0.5px;
            height: 100%;
            border-radius: 2px;
            margin-right: 4px;
        }`,
            `.abcd-holder {
                overflow: auto;
                height: 100%;
        }`,
            `.abcd-holder::-webkit-scrollbar{
              width: 0px;
        }`
    ]
})
export class AbcdComponent {

    codes = [{title: "Alpha", code: "&#945;"},
        {title: "Alpha", code: "&#940;"},
        {title: "Alpha", code: "&#913;"},
        {title: "Alpha", code: "&#902;"},
        {title: "Beta", code: "&#946;"},
        {title: "Beta", code: "&#976;"},
        {title: "Beta", code: "&#914;"},
        {title: "Gamma", code: "&#947;"},
        {title: "Gamma", code: "&#915;"},
        {title: "Delta", code: "&#948;"},
        {title: "Delta", code: "&#916;"},
        {title: "Epsilon", code: "&#949;"},
        {title: "Epsilon", code: "&#941;"},
        {title: "Epsilon", code: "&#1013;"},
        {title: "Epsilon", code: "&#1014;"},
        {title: "Epsilon", code: "&#917;"},
        {title: "Epsilon", code: "&#904;"},
        {title: "Zeta", code: "&#950;"},
        {title: "Zeta", code: "&#918;"},
        {title: "Eta", code: "&#951;"},
        {title: "Eta", code: "&#942;"},
        {title: "Eta", code: "&#919;"},
        {title: "Eta", code: "&#905;"},
        {title: "Theta", code: "&#952;"},
        {title: "Theta", code: "&#977;"},
        {title: "Theta", code: "&#920;"},
        {title: "Theta", code: "&#1012;"},
        {title: "Iota", code: "&#953;"},
        {title: "Iota", code: "&#943;"},
        {title: "Iota", code: "&#970;"},
        {title: "Iota", code: "&#912;"},
        {title: "Iota", code: "&#921;"},
        {title: "Iota", code: "&#938;"},
        {title: "Iota", code: "&#906;"},
        {title: "Kappa", code: "&#954;"},
        {title: "Kappa", code: "&#922;"},
        {title: "Lambda", code: "&#955;"},
        {title: "Lambda", code: "&#923;"},
        {title: "Mu", code: "&#956;"},
        {title: "Mu", code: "&#924;"},
        {title: "Nu", code: "&#957;"},
        {title: "Nu", code: "&#925;"},
        {title: "Xi", code: "&#958;"},
        {title: "Xi", code: "&#926;"},
        {title: "Omicron", code: "&#959;"},
        {title: "Omicron", code: "&#972;"},
        {title: "Omicron", code: "&#927;"},
        {title: "Omicron", code: "&#908;"},
        {title: "Pi", code: "&#960;"},
        {title: "Pi", code: "&#982;"},
        {title: "Pi", code: "&#928;"},
        {title: "Rho", code: "&#961;"},
        {title: "Rho", code: "&#929;"},
        {title: "Sigma", code: "&#963;"},
        {title: "Sigma", code: "&#962;"},
        {title: "Sigma", code: "&#1010;"},
        {title: "Sigma", code: "&#891;"},
        {title: "Sigma", code: "&#892;"},
        {title: "Sigma", code: "&#893;"},
        {title: "Sigma", code: "&#931;"},
        {title: "Sigma", code: "&#1017;"},
        {title: "Sigma", code: "&#1021;"},
        {title: "Sigma", code: "&#1022;"},
        {title: "Sigma", code: "&#1023;"},
        {title: "Tau", code: "&#964;"},
        {title: "Tau", code: "&#932;"},
        {title: "Upsilon", code: "&#965;"},
        {title: "Upsilon", code: "&#971;"},
        {title: "Upsilon", code: "&#973;"},
        {title: "Upsilon", code: "&#944;"},
        {title: "Upsilon", code: "&#978;"},
        {title: "Upsilon", code: "&#933;"},
        {title: "Upsilon", code: "&#939;"},
        {title: "Upsilon", code: "&#910;"},
        {title: "Phi", code: "&#968;"},
        {title: "Phi", code: "&#981;"},
        {title: "Phi", code: "&#934;"},
        {title: "Chi", code: "&#967;"},
        {title: "Chi", code: "&#935;"},
        {title: "Psi", code: "&#968;"},
        {title: "Psi", code: "&#936;"},
        {title: "Omega", code: "&#969;"},
        {title: "Omega", code: "&#974;"},
        {title: "Omega", code: "&#937;"},
        {title: "Omega", code: "&#911;"}]

    constructor() {
    }
}
