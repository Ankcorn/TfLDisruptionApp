import { Injectable } from '@angular/core';

import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleService {

  BASEURL = 'https://maps.googleapis.com/maps/api/geocode/json?address='
  Key = 'secret_key'

  constructor(private http:Http) { }

  getLatLong(place0:string,place1:string):Observable<string[]>{
   return Observable.forkJoin(
      this.http.get(this.BASEURL+place1+this.Key).map(this.extractData).catch(this.handleError),
      this.http.get(this.BASEURL+place0+this.Key).map(this.extractData).catch(this.handleError)
    )
  }

  private extractData(res: Response) {
    let body = res.json();
    let location = body.results[0].geometry.location.lat+'%2C%20'+body.results[0].geometry.location.lng
    console.log(location)
    return location
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
