import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { map, flatMap } from 'rxjs/operators';

//https://github.com/MTobisch/ngx-dynamic-hooks

@Component({
    selector: 'app-view',
    template: `
        <ngx-dynamic-hooks [content]="content" options></ngx-dynamic-hooks>
    `,
    styles: []
})
export class ViewComponent implements OnInit {
    content: string = ''

    path(pre: string): string {
        if(pre.endsWith('.html')) return pre;
        else return pre + "/index.html";
    }

    constructor(private http: HttpClient, private route: ActivatedRoute) {
        route.queryParams.pipe(
            flatMap(params => http.get('./assets/table_of_contents/' + this.path(params['path']), {responseType: 'text'}))
        ).subscribe(data => {
            this.content = data;
        })
    }

    ngOnInit(): void {
    }
}
