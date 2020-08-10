import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import {AppComponent} from './app.component';
import {TableComponent} from './components/table/table.component';
import {PageComponent} from './components/page/page.component';
import {Question1Component} from './questions/question1/question1.component';
import {Question2Component} from './questions/question2/question2.component';
import { Question3Component } from './questions/question3/question3.component';
import { Question4Component } from './questions/question4/question4.component';
import { Question5Component } from './questions/question5/question5.component';

const routes: Routes = [
  {path: '', redirectTo: 'question1', pathMatch: "full"},
  {path: 'question1', component: Question1Component},
  {path: 'question2', component: Question2Component},
  {path: 'question3', component: Question3Component},
  {path: 'question4', component: Question4Component},
  {path: 'question5', component: Question5Component},
  ];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PageComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    Question5Component
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
