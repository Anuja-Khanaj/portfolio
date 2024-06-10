import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap/gsap-core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  
  @ViewChild('col0') col0: ElementRef;
  @ViewChild('col1') col1: ElementRef;



  display: boolean;

  ngAfterViewInit(): void {
    const timeline2 = gsap.timeline({ default: { duration: 2 } });
    const timeline = gsap.timeline({ defaults: { duration: 1 }}); // Fix typo in 'defaults'

    timeline
      .to(this.col0.nativeElement, { y:20, opacity: 1 })  
      .to(this.col1.nativeElement, { x: 10, opacity: 1 })
    
  }

  tab:string = 'education'
  skillBg :boolean = false
  eduBg :boolean = true
  expBg: boolean = false

  OnSKillSelect(){
    this.tab = 'skill'
    this.skillBg  = true
    this.eduBg  = false
    this.expBg = false
  }
  OnEduSelect(){
    this.tab = 'education'
    this.skillBg  = false
    this.eduBg  = true
    this.expBg = false
  }
  OnExpSelect(){
    this.tab = 'experience'
    this.skillBg  = false
    this.eduBg  = false
    this.expBg = true
  }

}
