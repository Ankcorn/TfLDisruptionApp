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

  searchButtonHTML = "Search";

  ngOnInit(){
  }

  fromInput($event:any){
      this.from = $event.target.value
  }
  toInput($event:any){
      this.to = $event.target.value
  }
  search(){
    this.searchButtonHTML = '<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>';
    this.geoLocation(this.to,this.from,(tolocation,fromlocation)=>{
        this.tfl.getData(fromlocation,tolocation)
            this.searchButtonHTML = "Search";

    })
  }

  geoLocation(to:string,from:string,callback){
    this.geo.getLatLong(to,from).subscribe((result) =>{
      callback(result[0],result[1])
    })

  }
}
