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
    this.geoLocation(this.to,this.from,(tolocation,fromlocation)=>{
        this.tfl.getData(fromlocation,tolocation)
    })
  }

  geoLocation(to:string,from:string,callback){

    this.geo.getLatLong(to,from).subscribe((result) =>{
      callback(result[0],result[1])
    })

  }
}
