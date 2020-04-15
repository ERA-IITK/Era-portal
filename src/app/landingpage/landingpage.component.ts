import { BackendService } from './../../../public/app/backend.service';

import { AuthService } from './../backend.service';

import { RouterModule, Router } from '@angular/router';

import { Component, OnInit,HostBinding } from '@angular/core';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
