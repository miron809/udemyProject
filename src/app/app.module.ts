import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostComponent } from './components/post/post.component';
import { ComponentsComponent } from './components/components.component';
import { DirectivesComponent } from './directives/directives.component';
import { StyleDirective } from './directives/style.directive';
import { IfnotDirective } from './directives/ifnot.directive';
import { PipesComponent } from './pipes/pipes.component';
import {MultByPipe} from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ServicesComponent } from './services/services.component';
import {LocalCounterService} from './services/local-counter.service';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    ComponentsComponent,
    DirectivesComponent,
    StyleDirective,
    IfnotDirective,
    PipesComponent,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
    ServicesComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LocalCounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
