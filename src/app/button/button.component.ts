import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() content: string;
  @Output() changeNumber: EventEmitter<number> = new EventEmitter();
  @Output() str : EventEmitter<string> = new EventEmitter();
  Number: number = 2;
  @Input() sendInfo: string = "儿子的数据";
  constructor() {
    // setInterval(()=>{
    //   this.changeNumber.emit(++this.Number)
    // },1000);

  }
  addNum(){
    this.str.emit("子组件的值")
  }

  ngOnInit() {
  }

}
