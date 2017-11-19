import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';

//components
import { SammPercentSliderComponent } from '../../directives/sammPercentSliderDrv/sammPercentSlider.component';

//services
import { SammScrollService } from '../../services/sammScrollSrv/sammScroll.service';

//ui

@NgModule({
    imports: [  
        HomeRoutingModule,
        CommonModule
    ],
    declarations: [
        HomeComponent,
        SammPercentSliderComponent
    ],
    entryComponents: [
    ],
    providers: [
        SammScrollService
    ]
})
export class HomeModule { }

