import { Injectable } from "@angular/core";
import { IUser } from './user.model';

@Injectable()

export class AuthService {
    currentUser: IUser
    login(username:string, password:string){
        this.currentUser = {
            id:1,
            userName:username,
            firstName:"Ajit",
            lastName:"Test"
        }
    }

    updateProfile(firstName:string, lastName:string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    isAuthenticated(){
        return !!this.currentUser;
    }
}