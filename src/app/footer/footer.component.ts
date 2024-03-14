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

}
