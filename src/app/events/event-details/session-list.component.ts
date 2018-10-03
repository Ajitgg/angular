import { Component, Input } from "@angular/core";
import { ISession } from "../shared";

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html' 
})

export class SessionListComponent {
    @Input() sessions : ISession[]
    @Input() filterBy:string
    @Input() sortBy: string
    visibleSessions: ISession[] = []

    ngOnChanges(){
        if(this.sessions){
            this.filterSessions(this.filterBy)
            this.sortSessions(this.sortBy)
        }
    }

    filterSessions(filterBy:string){
        if(filterBy === 'all'){
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter(x => { 
                return x.level.toLocaleLowerCase() === filterBy
            })
        }
    }

    sortSessions(sortBy:string){
        this.visibleSessions = sortBy === 'name'? this.sessions.sort(sortByNameAsc)
                                                :this.sessions.sort(sortByVotesDesc)
    }
}

function sortByNameAsc(s1: ISession, s2: ISession){
    if(s1.name > s2.name) return 1
    else if(s1.name === s2.name) return 0
    else -1
}

function sortByVotesDesc(s1:ISession, s2:ISession){
    return s2.voters.length - s1.voters.length
}