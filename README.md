# sammScroll.Service
scroll service with angular

##Goal


This is an angular service to trace scroll event to subscribe all elements which registered in it. With this service you have only on event listener and many elements waiting for browser to meet a special height.

##How it works
Every element which needs to be subscribed in a special height can be registered in this service with setEventListener() and gets an observable object and Id (needs to remove listener). When the user scrolls, this service checks the list of heights and for every height which is reached the number will be subscribed and removed from the list.

##What should you do
Firstly, import the service in your module : 

```typescript
import { SammScrollService } from ‘../../services/sammScrollSrv/sammScroll.service’;

@NgModule({
    imports: [
        /* Other imports here */
      ],
providers: [
/* Other imports here */
        SammScrollService
    ]
})
export class AppModule {
}
```

Then import it in your component and use AfterViewInit Interface :

``` typescript
import { Component, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';
import { SammScrollService } from '../../../services/sammScrollSrv/sammScroll.service';
.
.
.
.
export class PipeNodeComponent implements AfterViewInit {

constructor(private scrollSrv : SammScrollService) { }

ngAfterViewInit(): void { 
        var pageOffset = (window.innerHeight / 20 )* 19;
        var listenY = this.elm.nativeElement.getBoundingClientRect().top + window.pageYOffset;
        if(listenY <= pageOffset) 
        {
            setTimeout(() => {
                this.NodeCurrentState = "active"; 
            }, 100);
        } else {
             this.ScrollEventInfo = this.scrollSrv.setEventListener(listenY - pageOffset);
            this.ScrollEventInfo.eventObserver.subscribe(
                () => { 
                    this.NodeCurrentState = "active"; 
                }
            );
        }
    }
}
```

I used pageOffset variable to set the event trigger in 19/20 of the screen.
