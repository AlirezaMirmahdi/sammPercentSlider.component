import { Injectable, OnInit, Component, ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


export class activeScrollEvent {
    id : number;
    startYLocatoin : number;
    eventEmitter : Subject<any>;
}

@Injectable()
export class SammScrollService implements OnInit {

    constructor() { 
        this.onScroll = Observable.fromEvent(window, 'scroll')
        .subscribe(event => this.checkScroll(window.scrollY));
    }
    
    ngOnInit(): void {
    }
    
    private onScroll : any;
    private ActiveEvents : activeScrollEvent[] = [];
    private NewId = 1;
    private RemoveIdList= [];
    
    private checkScroll(scrollPosition : number) {
        this.RemoveItemsFromOriginalList();
        for(var i = 0; i < this.ActiveEvents.length; i++){
            if(this.ActiveEvents[i].startYLocatoin < scrollPosition)
                {
                    this.ActiveEvents[i].eventEmitter.next();
                    this.removeEventListener(this.ActiveEvents[i].id);
                }
        }
    }
    
    private RemoveItemsFromOriginalList(){
        for(let i=0; i< this.RemoveIdList.length; i++){
            var itemidx = this.ActiveEvents.findIndex(x => x.id == this.RemoveIdList[i]);
            if(itemidx > 0){
                this.ActiveEvents[itemidx].eventEmitter.unsubscribe();
                var removedItem = this.ActiveEvents.splice(itemidx, 1);
            }
        }
        this.RemoveIdList = [];
    }
    
    setEventListener(yPosition : number) : any{
        var newEvent = new Subject<any>();
        this.ActiveEvents.push({
            startYLocatoin  : yPosition,
            eventEmitter : newEvent,
            id : this.NewId
        });
        this.NewId += 1;
        return {
            eventObserver : newEvent.asObservable(),
            eventId : this.NewId-1
        };
    }
    
    removeEventListener(id : number) : void{
        this.RemoveIdList.push(id);
    }
    
}