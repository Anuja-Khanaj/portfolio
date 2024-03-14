import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
   @ViewChild('nav') nav:ElementRef;
   @ViewChildren('item') items: QueryList<ElementRef>;


  ngAfterViewInit():void{
    gsap.to(this.nav.nativeElement, { delay:1,opacity:1 ,ease:'bounce'})
    this.items.forEach((item:ElementRef)=>{
      gsap.to(item.nativeElement,{opacity:1,delay:2,stagger:.5})
    })
     }
}
