import { Component, OnInit, Inject } from '@angular/core';

import { TflService } from '../tfl.service'
@Component({
  selector: 'app-disruption-list',
  templateUrl: './disruption-list.component.html',
  styleUrls: ['./disruption-list.component.css']
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
        this.parseData(result)},
      error => this.errorMessage = <any>error);
  }

  parseData(data){
    
    var disruptions = data.journeys.map(function(obj){
      return obj.legs.map(function(obj){
        return obj.disruptions.map(function(obj){
          return obj
        })
      })})
      
  }

}
