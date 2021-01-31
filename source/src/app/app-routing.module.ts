import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {ViewComponent} from "./components/view.component";

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'view', component: ViewComponent },
  { path: '',   redirectTo: '/app', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
