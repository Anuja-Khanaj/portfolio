import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
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
