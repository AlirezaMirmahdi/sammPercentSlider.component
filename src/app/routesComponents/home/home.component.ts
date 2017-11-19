import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styles: [require('./home.component.scss')]
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { 
        
    }

    LineBarList = [
        {
            title : 'item1',
            value : 75,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : false
        }, {
            title : 'item2',
            value : 32,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : true
        }, {
            title : 'item3',
            value : 53,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : false
        }, {
            title : 'item4',
            value : 14,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : true
        }, {
            title : 'item5',
            value : 86,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : false
        }, {
            title : 'item6',
            value : 75,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : true
        }, {
            title : 'item7',
            value : 65,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : false
        }, {
            title : 'item8',
            value : 90,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : true
        }
    ];
}
