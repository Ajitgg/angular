import { Component, Input } from "@angular/core";
declare let $: any

@Component({
    selector:'simple-modal',
    template:`
    <div [id]="modalId" class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-header">{{title}}</h4>
                </div>
                <div class="modal-body" (click)="closeModal()">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>  
    </div>
    `
})

export class SimpleModalComponent{
    @Input() title:string
    @Input() modalId:string

    constructor(){}

    closeModal(){
        let modalSelector = '#' + this.modalId
        $(modalSelector).modal('hide')
    }
}