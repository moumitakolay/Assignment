import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthenticationService) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    const username = event.queryselector('#UserName').value
    const password = event.queryselector('#PassWord').value

    this.Auth.getUserDetails(username, password)
    console.log(username, password)
  }
}
