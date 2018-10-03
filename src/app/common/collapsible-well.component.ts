import { Component, Input } from "@angular/core";

@Component({
    selector:'collapsible-well',
    template:`
    <div class= "well pointable" (click) = "toggle()">
        <ng-content select=".title"></ng-content>
        <ng-content select="[well-body]" *ngIf = "showContent"></ng-content>
    </div>
    `
})

export class CollapsibleWellComponent{
    private showContent: boolean = true

    toggle(){
        this.showContent = !this.showContent;
    }
}