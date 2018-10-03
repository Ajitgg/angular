import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared";

@Component({
templateUrl:'./create-event.component.html',
styles: [`
    em { float:right; color:red; padding-left:10px}
    .error {background-color:pink}
    .error::-webkit-input-placeholder {color:darkgrey}
`]
})

export class CreateEventComponent{
    isDirty:boolean= true;
    constructor(private eventService: EventService, private router: Router){

    }

    saveEvent(formValues){
        this.eventService.saveEvent(formValues)
        this.isDirty = false;
        this.router.navigate(['/events'])
    }

    cancel(){
        this.router.navigate(['/events'])
    }
}