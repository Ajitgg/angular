import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service';
import { EventService, ISession } from '../events';
import { JQueryService } from '../common/jquery.service';

@Component({
    selector:'nav-bar',
    templateUrl: './navbar.component.html',
    styles:['li > .active{ color: orange}']
})

export class NavBarComponent{
    searchTerm:string = "";
    foundSessions:ISession[];
    
    constructor(private auth:AuthService, private eventService: EventService, private $:JQueryService){}

    searchSessions(searchTerm:string){
        this.eventService.searchSessions(searchTerm).subscribe(sessions=> {
            this.foundSessions = sessions
        });
    }
}