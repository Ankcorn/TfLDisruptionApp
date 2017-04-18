<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
=======
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
>>>>>>> ea340127afea1d99c9381b7cfbe5966bce27982b

@Component({
  selector: 'app-disruption',
  templateUrl: './disruption.component.html',
  styleUrls: ['./disruption.component.css'],

})
export class DisruptionComponent implements OnInit {
<<<<<<< HEAD
  @Input() disruption;
  
  constructor() { }
=======
  @Input() disruption:any
  @Input() i:any
  @Output() deleted = new EventEmitter<number>();
  categoryIcon = ''
  description = ''
  constructor() { 
    
  }
>>>>>>> ea340127afea1d99c9381b7cfbe5966bce27982b

  ngOnInit() {
    console.log(this.disruption)
    this.categoryIcon = this.selectFaIcon(this.disruption.category)
    this.description = this.disruption.description.substring(0,this.disruption.description.indexOf('.'))
  }

  selectFaIcon(iconstr:string):string{
    switch(iconstr){
      case "Information":
      return "fa-info";
      case "Crowding":
      return "fa-users";
      case "PlannedWork":
      return "fa-wrench"
      case "RealTime":
      return "fa-clock-o"
      default:
      return "fa-question"
    }    
  }

  delete(index:number){
    this.deleted.emit(index)
  }



}
