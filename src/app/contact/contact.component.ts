import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogService } from '../Services/log.service';
import { msg } from '../Model/msg';
import { Route, Router } from '@angular/router';
import { gsap } from 'gsap/gsap-core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit,AfterViewInit{
  
 
  @ViewChild('col1') col1: ElementRef;
  @ViewChild('col2') col2: ElementRef;



  display: boolean;

  ngAfterViewInit(): void {
    const timeline2 = gsap.timeline({ default: { duration: 2 } });
    const timeline = gsap.timeline({ defaults: { duration: 1 }}); // Fix typo in 'defaults'

    timeline 
      .to(this.col1.nativeElement, { x: 3, opacity: 1 })
      .to(this.col2.nativeElement, { x: -5, opacity: 1 })
  }
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
