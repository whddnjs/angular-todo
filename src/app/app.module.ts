import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';

@NgModule({
  imports: [BrowserModule, FormsModule, TodoModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
