//Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//Design
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//App ts
import { RootComponent } from './routesComponents/appRoot/root.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    declarations: [
        RootComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    entryComponents: [
    ],
    bootstrap: [RootComponent],
    providers: []
})
export class AppModule { }
