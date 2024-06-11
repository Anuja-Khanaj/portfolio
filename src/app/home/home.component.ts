import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap/gsap-core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  
  // @ViewChild('col0') col0: ElementRef;
  @ViewChild('col1') col1: ElementRef;
  @ViewChild('col2') col2: ElementRef;
  @ViewChild('col3') col3: ElementRef;
  @ViewChild('col4') col4: ElementRef;
  @ViewChild('col5') col5: ElementRef;
  // @ViewChild('col6') col6: ElementRef;
  // @ViewChild('nav') nav: ElementRef;
 

  ngAfterViewInit(): void {
    const timeline2 = gsap.timeline({ default: { duration: 2 } });
    const timeline = gsap.timeline({ defaults: { duration: 1 }}); // Fix typo in 'defaults'

    timeline
      // .to(this.intro.nativeElement, { x: 10, opacity: 1 })
      // .to(this.col0.nativeElement, { y:-20, opacity: 1 })  
      .to(this.col1.nativeElement, {  opacity: 1 })
      .to(this.col2.nativeElement, {  opacity: 1 })
      .to(this.col3.nativeElement, { opacity: 1 })
      .to(this.col4.nativeElement, { opacity: 1 })
      .to(this.col5.nativeElement, {  opacity: 1 })
      // .to(this.col6.nativeElement, { x: -10, opacity: 1 })
      // .to(this.nav.nativeElement, { opacity: 1 });
  }
}

  
 

