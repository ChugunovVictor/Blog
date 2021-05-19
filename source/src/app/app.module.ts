import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KatexComponent, KatexModule, KatexParagraphComponent } from 'ng-katex';
import { SideNavigationComponent } from './components/side-navigation.component';
import { ViewComponent } from './components/view.component';
import { HttpClientModule } from "@angular/common/http";
import { DynamicHooksModule, HookParserEntry } from 'ngx-dynamic-hooks';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { CodeBlockComponent } from './components/code-block.component';
import { AbcdComponent } from './components/abcd.component';
import { TabsComponent, TabBlockComponent } from './components/tabs.component';
import { TreeChartComponent } from './components/tree-chart.component';
import { LatexComponent } from './components/latex.component';

const componentParsers: Array<HookParserEntry> = [
    { component: KatexParagraphComponent },
    { component: KatexComponent },
    { component: CodeBlockComponent },
    { component: TabsComponent },
    { component: TabBlockComponent },
    { component: TreeChartComponent },
    { component: LatexComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        SideNavigationComponent,
        ViewComponent,
        CodeBlockComponent,
        AbcdComponent,
        TabsComponent,
        TabBlockComponent,
        TreeChartComponent,
        LatexComponent,
    ],
    imports: [
        BrowserModule,
        KatexModule,
        AppRoutingModule,
        HttpClientModule,
        HighlightModule,
        DynamicHooksModule.forRoot({
            globalParsers: componentParsers,
            globalOptions: { convertHTMLEntities: false, sanitize: false }
        }),
    ],
    providers: [{
        provide: HIGHLIGHT_OPTIONS,
        useValue: {
            coreLibraryLoader: () => import('highlight.js/lib/core'),
            lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
            languages: {
                javascript: () => import('highlight.js/lib/languages/javascript'),
                scala: () => import('highlight.js/lib/languages/scala')
            }
        }
    }],
    bootstrap: [AppComponent],
    entryComponents: [LatexComponent, KatexComponent, KatexParagraphComponent, CodeBlockComponent],
})
export class AppModule {
}
