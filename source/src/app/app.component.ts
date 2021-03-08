import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="app-root">
            <app-side-navigation></app-side-navigation>
            <div class="content">
                <router-outlet></router-outlet>
            </div>
            <app-abcd-component></app-abcd-component>
        </div>
    `
})
export class AppComponent {

}
