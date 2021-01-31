import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KatexModule, KatexParagraphComponent} from 'ng-katex';
import {SideNavigationComponent} from './components/side-navigation.component';
import {ViewComponent} from './components/view.component';
import {HttpClientModule} from "@angular/common/http";
import {DynamicHooksModule, HookParserEntry} from 'ngx-dynamic-hooks';

const componentParsers: Array<HookParserEntry> = [
    {component: KatexParagraphComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        SideNavigationComponent,
        ViewComponent
    ],
    imports: [
        BrowserModule,
        KatexModule,
        AppRoutingModule,
        HttpClientModule,
        DynamicHooksModule.forRoot({
            globalParsers: componentParsers
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [KatexParagraphComponent],
})
export class AppModule {
}
