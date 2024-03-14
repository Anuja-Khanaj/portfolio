import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap/gsap-core';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
  export class  SkillsComponent   implements AfterViewInit {
  
    @ViewChild('intro2') intro:ElementRef;
    @ViewChild('col1') col1:ElementRef;
    @ViewChild('col2') col2:ElementRef;
    @ViewChild('col3') col3:ElementRef;
    @ViewChild('col4') col4:ElementRef;
    @ViewChild('col5') col5:ElementRef;
    @ViewChild('col6') col6:ElementRef;
    @ViewChild('nav') nav:ElementRef;



  
    ngAfterViewInit(): void {
      const timeline2 = gsap.timeline({default:{duration:2}});
      const timeline = gsap.timeline({defauls:{duration:1}})
        timeline
        .to(this.intro.nativeElement,{x:10, opacity:1})  
        .to(this.col1.nativeElement,{x:10,opacity:1})
        .to(this.col2.nativeElement,{x:-10,opacity:1})
        .to(this.col3.nativeElement,{x:10,opacity:1})
        .to(this.col4.nativeElement,{x:-10,opacity:1})
        .to(this.col5.nativeElement,{x:10,opacity:1})
        .to(this.col6.nativeElement,{x:-10,opacity:1})
        .to(this.nav.nativeElement,{opacity:1})

    }
  
    
   
  }
