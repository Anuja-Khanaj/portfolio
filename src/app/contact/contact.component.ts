import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogService } from '../Services/log.service';
import { msg } from '../Model/msg';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit{

  reactiveForms:FormGroup
  constructor(
    private logservice: LogService,
    private router: Router
  ) {}
  ngOnInit(){
    this.reactiveForms = new FormGroup({
      name : new FormControl(''),
      email: new FormControl('', Validators.email),
      msg: new FormControl('')
    })
  }
  onFormSubmit(msg:msg){
    console.log('clicked');
    this.logservice.Contact(msg)
    this.reactiveForms.reset('')
    alert("Message conveyed successfully.👍")
    this.router.navigate(['/Home'])
  }
}
