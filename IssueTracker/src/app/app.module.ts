import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRouting } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { PipeFilter } from './pipes/filter.pipe';
import { IssuesService } from './services/issues.service';
import { FormComponent } from './components/form/form.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TableComponent,
    FormComponent,
    AboutComponent,
    PipeFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  providers: [IssuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
