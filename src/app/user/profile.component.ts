import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastrService } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`em {float: right; color:red; padding-left:0px;}
           .error { background-color:pink; }
           .error:-webkit-input-placeholder {color:red}`]
})
export class ProfileComponent implements OnInit {
  private firstName: FormControl
  private lastName: FormControl
  profileForm: FormGroup

  constructor(private authService: AuthService, private router:Router, private toastr: ToastrService){}

  ngOnInit(){
    this.firstName = new FormControl(this.authService.currentUser.firstName, 
                                      [Validators.required, Validators.pattern("[a-zA-Z].*")])
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({"firstName":this.firstName, "lastName": this.lastName})
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel(){
    this.router.navigate(['/events'])
  }

  updateProfile(formValues){
    if(this.profileForm.valid){
      this.authService.updateProfile(formValues.firstName, formValues.lastName)
      this.router.navigate(['/events'])
      this.toastr.success('Profile updated successfully!!!')
    }
  }
}