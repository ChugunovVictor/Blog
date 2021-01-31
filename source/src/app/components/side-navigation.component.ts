import {Component, OnInit} from '@angular/core';
import toc from '../../assets/table_of_contents/table_of_contents.json'
import {Menu, MenuItem} from "../model/menu";

@Component({
    selector: 'app-side-navigation',
    template: `
        <ul class="app-side-navigation">
            <li *ngFor="let menu of root">
                {{ menu.title }}
                <ul class="menuItemList">
                    <li *ngFor="let item of menu.children">
                        <a routerLink="/view" [queryParams]="{ path: menu.path + '/' + item.path }"
                           routerLinkActive="active">{{ item.title }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    `,
    styles: [
            `:host {
            width: 150px;
            margin: 8px;
            display: flex;
        }`,
            `:host:after {
            content: "";
            float: left;
            background: black;
            width: 2px;
            height: 100%;
            border-radius: 2px;
        }`,
            `.app-side-navigation {
            padding: 8px;
        }`,
            `.menuItemList {
            font-size: small;
            padding-inline-start: 10px;
        }`
    ]
})
export class SideNavigationComponent implements OnInit {
    root: Menu[];

    constructor() {
    }

    ngOnInit(): void {
        this.root = toc.root
    }
}
