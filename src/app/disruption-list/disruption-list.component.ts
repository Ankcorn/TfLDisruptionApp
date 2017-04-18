import { Component, OnInit, Inject } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/core';

import { TflService } from '../tfl.service'
@Component({
  selector: 'app-disruption-list',
  templateUrl: './disruption-list.component.html',
  styleUrls: ['./disruption-list.component.css'],
  animations: [
    trigger('DisruptionElement', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class DisruptionListComponent implements OnInit {

  constructor(@Inject(TflService) private tfl) { }
 
  disruptionList = [];
 
  errorMessage

  ngOnInit() {
    this.getDistruptions();
    
  }

  getDistruptions(){
    this.tfl.getData().subscribe(
      (result) => {
        console.log('result received')
        this.parseData(result)
      },
      error => this.errorMessage = <any>error);
  }

  parseData(data){
    var array =[]

    data.journeys.map(function(obj){
      obj.legs.map(function(obj){
         obj.disruptions.map(function(obj){
           //if(obj.category!=='Information'){
           array.push(obj)//}
         })
      })})
      console.log(array)

      this.disruptionList = array
  }

  deleted(index:number){
    this.disruptionList.splice(index,1)
  }

}
