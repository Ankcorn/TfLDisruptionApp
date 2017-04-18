import { Component, OnInit, Inject } from '@angular/core';

import { GoogleService } from '../google.service'
import { TflService } from '../tfl.service'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(@Inject(GoogleService) private geo,@Inject(TflService) private tfl) { }
  from:string
  to:string

  ngOnInit(){
    
  }
  fromInput($event:any){
      this.from = $event.target.value
  }
  toInput($event:any){
      this.to = $event.target.value
  }
  search(){
    this.tfl.getData(this.geoLocation(this.from),this.geoLocation(this.to))
  }

  geoLocation(place:string){

    var result = this.geo.getLatLong(place).subscribe((result) =>{
      
      console.log(result)
    })
    
    return result
  }
}
