import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userloggedin:boolean=true;
  error: boolean=false;
  errorMessage:String="";
  

  constructor(private_backendservice: BackendService) { }

  ngOnInit():  {
    this.getAuthStatus();
  }
  login(filter){

  }
  logout(){
  getAuthStatus()
  }

}
