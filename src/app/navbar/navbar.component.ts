import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  search:string
  constructor() { }

  ngOnInit() {
  }

  submit(){

  }

}
