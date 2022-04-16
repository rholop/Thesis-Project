import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListContainerComponent } from './task-list-container/task-list-container.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskManualComponent } from './task-manual/task-manual.component';
import { TypeformComponent } from './typeform/typeform.component';
import { ListExporterComponent } from './list-exporter/list-exporter.component';
import { HomeComponent } from './home/home.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { DeleteOneTaskDialogComponent } from './delete-one-task-dialog/delete-one-task-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatBadgeModule } from '@angular/material/badge';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskListContainerComponent,
    NewTaskComponent,
    TaskManualComponent,
    TypeformComponent,
    ListExporterComponent,
    HomeComponent,
    HomeContainerComponent,
    DeleteDialogComponent,
    DeleteOneTaskDialogComponent,
    HomeDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
