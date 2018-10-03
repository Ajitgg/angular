import { Directive, OnInit, ElementRef, Input } from "@angular/core";
declare let jQuery: any

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
    @Input('modal-trigger') modalId:string 
    el:HTMLElement

    constructor(ref:ElementRef){
        this.el = ref.nativeElement
    }

    ngOnInit(){
        this.el.addEventListener('click', e=> {
            let modalSelector = '#'+this.modalId
            jQuery(modalSelector).modal({})
        })
    }
}