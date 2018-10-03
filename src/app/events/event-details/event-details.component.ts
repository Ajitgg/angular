import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute, Params } from "@angular/router";
import { IEvent, ISession } from "../shared";

@Component({
    templateUrl:'./event-details.component.html'
})

export class EventDetailsComponent{
    event: IEvent
    addMode: boolean
    filterBy: string = 'all';
    sortBy:string = 'name';

    constructor(private eventService: EventService, private route: ActivatedRoute){
    }

    ngOnInit(){
        this.route.params.forEach((params:Params)=> {
            this.event = this.eventService.getEvent(+params['id'])
            this.addMode = false
        })
    }

    addSession(){
        this.addMode = true
    }

    saveNewSession(session: ISession){
        session.id = Math.max.apply(null, this.event.sessions.map(x => x.id)) + 1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false;
    }

    cancelSession() {
        this.addMode = false;
    }
}
