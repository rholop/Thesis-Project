import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListContainerComponent } from './task-list-container/task-list-container.component';
import { TaskMakerComponent } from './task-maker/task-maker.component';
import { TaskManualComponent } from './task-manual/task-manual.component';
import { TaskHelperComponent } from './task-helper/task-helper.component';
import { ListExporterComponent } from './list-exporter/list-exporter.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeContainerComponent } from './home-container/home-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskListContainerComponent,
    TaskMakerComponent,
    TaskManualComponent,
    TaskHelperComponent,
    ListExporterComponent,
    HomeComponent,
    HomeContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
