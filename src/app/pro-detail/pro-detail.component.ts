import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pro-detail',
  templateUrl: './pro-detail.component.html',
  styleUrls: ['./pro-detail.component.css']
})
export class ProDetailComponent implements OnInit {
  detailId : string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit():void{
    this.activatedRoute.params.subscribe((Params : Params) =>{
      this.detailId = Params['id'];
    })
  }

}
