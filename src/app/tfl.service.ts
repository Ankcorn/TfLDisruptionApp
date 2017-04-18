import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TflService {
  Base_URL = 'https://api.tfl.gov.uk/Journey/JourneyResults/'
  FROM_TO = '51.501377%2C%20-0.126221/to/51.513513%2C%20-0.089153'

  constructor(private http: Http) { }


  getParams():string{
     var today = new Date();
     var year = today.getFullYear();
     var month = today.getMonth()+1;
     var day = '0'+today.getDate();
     var hour = today.getHours();
     var minutes = today.getMinutes();

     if(hour.toString.length===1){
       hour = 0+hour
     }

     if(minutes.toString.length===1){
       console.log('converting')
       minutes = 0+minutes
     }

     var params = '?date='+year+'0'+month+day+'&time='+hour+minutes+'&timeIs=Departing';
     console.log(params);
     return params;
  }

  getData(): Observable<Object>{
     return this.http.get(this.Base_URL+this.FROM_TO+this.getParams())
                     .map(this.extractData)
                     .catch(this.handleError)
    
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
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
