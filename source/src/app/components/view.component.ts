import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

//https://github.com/MTobisch/ngx-dynamic-hooks

@Component({
  selector: 'app-view',
  template: `
    <ngx-dynamic-hooks [content]="content"></ngx-dynamic-hooks>
  `,
  styles: [
  ]
})
export class ViewComponent implements OnInit {

  content: string = ''

  constructor( private http: HttpClient, private route: ActivatedRoute ) {
    route.queryParams.subscribe(
        params => http.get('./assets/table_of_contents/' + params['path'], {responseType: 'text'}).subscribe(data => {
          this.content = data;
        })
    )
  }

  ngOnInit(): void {
  }

}
