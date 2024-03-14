import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap/gsap-core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('footer') footer:ElementRef
  @ViewChild('header') header:ElementRef
  @ViewChild('skills') skills:ElementRef
  @ViewChild('intern') intern:ElementRef
  @ViewChild('img') img:ElementRef;
  @ViewChild('text') text:ElementRef;
  @ViewChild('btn') btn:ElementRef;
  @ViewChild('img2') img2:ElementRef;
  @ViewChild('btn2') btn2:ElementRef;
  @ViewChild('text2') text2:ElementRef;
  @ViewChild('img3') img3:ElementRef;
  @ViewChild('btn3') btn3:ElementRef;
  @ViewChild('text3') text3:ElementRef;
  @ViewChild('dev') dev:ElementRef;
  @ViewChild('name') name:ElementRef;
  @ViewChild('Yt') Yt:ElementRef;
  @ViewChild('intro') intro:ElementRef;



  ngAfterViewInit(): void {
    const timeline2 = gsap.timeline({default:{duration:2}});
    const timeline = gsap.timeline({defauls:{duration:1}})
      timeline
      .to(this.intro.nativeElement,{y:-350, delay:2, opacity:1})
        .to(this.img.nativeElement,{x:30, opacity:1})
        .fromTo(this.text.nativeElement,{x:0},{x:-50, opacity:1})
        .to(this.btn.nativeElement,{y:5, opacity:1,delay:.4})
        .to(this.img2.nativeElement,{x:-30, opacity:1,delay:1})
        .fromTo(this.text2.nativeElement,{x:0},{x:50, opacity:1})
        .to(this.btn2.nativeElement,{y:5, opacity:1,delay:.1})
        .to(this.img3.nativeElement,{x:30, opacity:1,delay:1})
        .fromTo(this.text3.nativeElement,{x:0},{x:-50, opacity:1})
        .to(this.btn3.nativeElement,{y:5, opacity:1,delay:.4})
        .to(this.header.nativeElement,{x:-10,delay:1,opacity:1, ease:'bounce'})
        .to(this.skills.nativeElement,{x:-10,opacity:1, ease:'bounce'})
        .to(this.intern.nativeElement,{x:-10,opacity:1, ease:'bounce'})
        .to(this.footer.nativeElement,{x:-10,opacity:1, ease:'bounce'})
      
      // timeline2
      // .to(this.Yt.nativeElement,{ opacity:1,delay:3})
      // // .to(this.dev.nativeElement,{ opacity:1,delay:4});
      // timeline2.repeat(-1)
  }

  
 
}
