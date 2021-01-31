import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="app-root">
            <app-side-navigation></app-side-navigation>
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {

}
