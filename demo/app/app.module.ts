import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import {FormDemoComponent} from "./form.component";
import {ImageDemoComponent} from "./image.component";
import {MultipleDemoComponent} from "./multiple.component";
import {DropDirective, FileModelDirective, SelectComponent, ClickForwardDirective,
    FileValidatorDirective, ImageValidatorDirective, MediaValidatorDirective,
    QueueDirective} from "../../src/index";


@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ] ,
    declarations: [
        AppComponent, FormDemoComponent, ImageDemoComponent, MultipleDemoComponent,
        SelectComponent, ClickForwardDirective,
        DropDirective,
        FileModelDirective, FileValidatorDirective,
        ImageValidatorDirective, MediaValidatorDirective,
        QueueDirective
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }