import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ISession } from "../shared";

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles:[`
        em { float: right; color:red; padding-left:10px; }
        .error input, .error select, .error textarea { background-color: pink; }
        .error ::-webkit-input-placeholder {color:darkgrey; }
    `]
})

export class CreateSessionComponent implements OnInit {

    newSessionForm : FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl

    @Output() saveNewSessionClicked = new EventEmitter()
    @Output() cancelSessionClicked = new EventEmitter()

    ngOnInit(){
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(4)])
        
        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveSession(formValues){
        console.log(formValues)

        let session: ISession ={
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
        this.saveNewSessionClicked.emit(session)       
    }
    
    cancel(){
        this.cancelSessionClicked.emit()
    }
}