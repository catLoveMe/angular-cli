import { Component, OnInit, ViewChild } from '@angular/core';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  heros: any = [
    {id:0,name:'张三'},
    {id:1,name:'李四'},
    {id:2,name:'王麻子'}
    ];
  i: number = 0;
  b: number = 2;
  strPar : string = '';

  onClick() {
    console.log('Click');
  }
  @ViewChild('son') son;

  constructor() {

  }

  ngOnInit(): void {
    $("#btn").on('click',function () {
      alert(" jquery")
    })
  }
  numberChange(i: number){
    this.i = i+3;
    console.log(`子组件中传过来的数据+ ${i}`);
  }
  getStr(info){
      this.strPar = `子组件的+${info}`;
    console.log( this.strPar)
    alert(this.son.sendInfo);
  }






}
