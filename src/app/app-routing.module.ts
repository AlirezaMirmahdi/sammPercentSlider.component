import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Routes
const appRoutes: Routes = [

    {
        path: 'home',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], require => {
                resolve(require('./routesComponents/home/home.module').HomeModule);
                })
        })
    },
    {
        path: '**',
        redirectTo: '/home',
    }

];

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                //preloadingStrategy: PreloadAllModules,
                //enableTracing: true, // <-- debugging purposes only
            }

        ),
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})

export class AppRoutingModule {

}