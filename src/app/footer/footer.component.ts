import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {
@ViewChild('nav') nav:ElementRef
 ngAfterViewInit(): void {
    //  gsap.to(this.nav.nativeElement,{opacity:1, delay:2})
 }

 socialLinks = [
  {
    name: 'Instagram',
    url: '#'
  },
  {
    name: 'Threads',
    url: 'https://github.com/Anuja-Khanaj'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Anuja-Khanaj'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/anuja-khanaj-571998236'
  }
];
}



