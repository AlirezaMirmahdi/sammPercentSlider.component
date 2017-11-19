import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import { SammScrollService } from '../../services/sammScrollSrv/sammScroll.service'
//import { SamAppearDirective } from '../samAppearDrv/samAppear.component';

@Component({ 
    selector: 'samm-percent-slider',
    template: `
        <div class="sam-progressbar-outline">
            <div class="sam-progressbar">
                <div class="sam-progress-value-show" [style.width]="fconfig.currentValue + '%'" [ngClass]="fconfig.linebarColorClass" [class.sam-progress-value-show-animation]="config.valueAnimation" >
                </div>
                <span [ngClass]="fconfig.linebarColorClass" class="sam-progress-value">{{fconfig.currentValue}}%</span>
            </div>
            <strong [ngClass]="fconfig.titleColorClass">{{fconfig.title}}</strong>
        </div>
    `,
    styles: [`
        .sam-progressbar-outline{
            width: 100%;
            padding-left: 10px;
            padding-right: 40px;
        }
        .sam-progressbar {
            height: 6px;
            margin-bottom: 10px;
            background-color: #f1f1f1;
            width: 100%;
        }
        .sam-progress-value-show {
            height: 6px;
            width: 0;
            float: left;
        }
        .sam-progress-value-show-animation{
            -webkit-transition: width 1s ease-in-out;
            -o-transition: width 1s ease-in-out;
            transition: width 1s ease-in-out;
        }
        .sam-progress-value {
            position: absolute;
            margin-top: -7px;
            margin-left: -10px;
            display: inline-block;
            padding: 0 10px;
            font-size: 11px;
            color: #fff;
            border-radius: 15px;
            font-weight: 500;
            line-height: 20px;
        }
    `]
})

export class SammPercentSliderComponent implements AfterViewInit {
    @Input() config: Object ;
    
    constructor(private scrollSrv : SammScrollService
                , private elm : ElementRef){ };
    
    private ScrollEventInfo : any;
    
    ngAfterViewInit(){
        this.loadOnData();
    };
    
    private defaultConfig = {
        currentValue : 0,
        linebarColorClass : '#1A2A41',
        titleColorClass : 'black' ,
        title : '',
        value : 0,
        valueAnimation : false
    }

    fconfig : any;
    visited = false;
    
    ngOnInit() {
        this.fconfig = Object.assign({}, this.defaultConfig, this.config);
        if(!this.fconfig.valueAnimation) this.fconfig.currentValue = this.fconfig.value;
    }
    
    loadOnData() {
        if(!this.fconfig.valueAnimation) return;
        
        var pageOffset = (window.innerHeight / 20 )* 19;
        var listenY = this.elm.nativeElement.getBoundingClientRect().top + window.pageYOffset;
        if(listenY <= pageOffset) 
        {
            setTimeout(() => {
                this.fconfig.currentValue = this.fconfig.value;
            }, 100);
        } else {
             this.ScrollEventInfo = this.scrollSrv.setEventListener(listenY - pageOffset);
            this.ScrollEventInfo.eventObserver.subscribe(
                () => { 
                    this.fconfig.currentValue = this.fconfig.value;
                }
            );
        }
    }
}