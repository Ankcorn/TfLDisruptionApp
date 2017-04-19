import { Component, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
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

  constructor(@Inject(TflService) private tfl) { 
    this.tfl.requestComplete$.subscribe((tflRouteData) => {
      console.log('Data request was made')
      this.disruptionList = this.parseData(tflRouteData)
      


    })
  }
 
  disruptionList = [];
 
  errorMessage

  ngOnInit() {
  }
  
  parseData(data){
    var array = []
   
    data.journeys.map(function(obj){
      obj.legs.map(function(obj){
         obj.disruptions.map(function(obj){
           //if(obj.category!=='Information'){
           array.push(obj)//}
         })
      })})

     return array
  }

  deleted(index:number){
    this.disruptionList.splice(index,1)
  }

}
