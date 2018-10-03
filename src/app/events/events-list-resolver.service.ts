import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./shared/event.service";
import { IEvent } from "./shared";
//import { map } from 'rxjs/operators';

@Injectable()

export class EventListResolver implements Resolve<IEvent[]> {
    constructor(private eventService: EventService){

    }

    resolve(){
        return this.eventService.getEvents()//.pipe(map(events => events));
    }
}