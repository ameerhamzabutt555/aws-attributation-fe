import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  signUp(val:any){
   console.warn(val)
  }

  login(vals:any){
    console.warn(vals)
   }

}
