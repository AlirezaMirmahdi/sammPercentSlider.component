import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Routes
import { HomeComponent } from './home.component';


const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }
];


@NgModule({
    declarations: [
        
    ],
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class HomeRoutingModule { }