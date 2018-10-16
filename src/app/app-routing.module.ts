import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {CoComponent} from './co/co.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component: CoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
