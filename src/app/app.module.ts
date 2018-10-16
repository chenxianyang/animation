import { NgModule } from '@angular/core';
import { CommonModule , LocationStrategy, PathLocationStrategy, APP_BASE_HREF,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoComponent} from './co/co.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, CoComponent, ChildComponent],
  bootstrap: [AppComponent],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}, {provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule { }
