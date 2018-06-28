import { Component, OnInit ,HostBinding} from '@angular/core';
import {Animate} from '../animate/animate'
import {slideToRight} from '../animate/animateAn'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations:[
    Animate,
    slideToRight
  ]
})
export class AboutComponent implements OnInit {

  private boxState:string = 'left';
  private _isTrue:boolean = true;
  constructor() { }
  @HostBinding('@routerAnimate') state;
  ngOnInit() {
  }
  start(): void {
    console.log('开始运动');
    if (this._isTrue) {
        this.boxState = 'right';
    } else {
        this.boxState = 'left';
    }
    this._isTrue = !this._isTrue;
}



}
