# sammPercentSlider.compnent
This is an angular component for showing percentage. For the first version it has  2 modes :
1) without animation
2) with animation
For the second mode it works with sammScroll.service which you can find here : https://github.com/AlirezaMirmahdi/sammScroll.Service

## Demo
http://mirmahdi.pro/projects/sammpercentslider

## How it works
The sammPercentSlider.compnent file address is : src/app/ directives/sammPercentSliderDrv/ sammPercentSlider.component.ts
This component needs a config object like : 

``` typescript
{
            title : 'item1',
            value : 75,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : false
}
```
linebarColorClass is the name of the Css class which determines the color of the bar.
titleColorClass is the name of the Css class which determines the color of the title.


## What should you do
The scroll.service file address is : 
src/app/services/sammScrollSrv/sammScroll.service.ts

Firstly, import the service in your module : 

```typescript
import { SammScrollService } from ‘../../services/sammScrollSrv/sammScroll.service’;
import { SammPercentSliderComponent } from '../../directives/sammPercentSliderDrv/sammPercentSlider.component';

@NgModule({
    imports: [
        /* Other imports here */
      ],
declarations: [
        /* Other imports here */
        SammPercentSliderComponent
    ],
providers: [
/* Other imports here */
        SammScrollService
    ]
})
export class AppModule {
}
```

Then use it like this :

In your component.ts
``` typescript
linebarConfig = {
            title : 'item1',
            value : 75,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : false
        }
```
In your component.html
``` typescript
<samm-percent-slider [config]=" linebarConfig "></samm-percent-slider>
```

In your component.css
``` typescript
:host ::ng-deep .line-bg-color{
    background-color: firebrick;
}

:host ::ng-deep .line-title-color{
    color: firebrick;
}

```


