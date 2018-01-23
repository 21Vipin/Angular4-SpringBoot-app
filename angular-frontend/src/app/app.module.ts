import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatGridListModule} from '@angular/material';


import { AppComponent } from './app.component';

import { TodoService } from './todo.service';
import {WeatherService} from './weather.service';
import { TodoComponent } from './todo/todo.component';
import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: '', component: HomeComponent },
  { path: 'weather', component: WeatherComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    WeatherComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule
  ],
  providers: [TodoService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
