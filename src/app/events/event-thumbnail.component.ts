import {Component, Input } from '@angular/core'
import { IEvent } from './shared';

@Component({
    selector:'event-thumbnail',
    templateUrl:'./event-thumbnail.component.html',
    styles:[`
        .thumbnail {min-height:210px}
        .well div {color:#bbb}
        .green {color:#003300 !important; }
        .bold { font-weight: bold; }
    `]
})

export class EventThumbnailComponent {
    @Input() event:IEvent

    private getStartTimeClass(){
        if(this.event && this.event.time ==='8:00 am')
            return ['green', 'bold'] 
        return [];
    }

    private getStartTimeStyle() {
        if(this.event && this.event.time === '8:00 am')
            return { color:'green', 'font-weight': 'bold'}
        return {}
    }
}