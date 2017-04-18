import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class TflService {
  Base_URL:string = 'https://api.tfl.gov.uk/Journey/JourneyResults/'
  FROM_TO:string = '51.501377%2C%20-0.126221/to/51.513513%2C%20-0.089153'

  constructor(private http: Http) { }

  //Trigger that lets the disruption-list 
  private requestSource = new Subject<boolean>(); // For the initial search screen
  requestComplete$ = this.requestSource.asObservable();

  getParams():string{
     var today = new Date();
     var year = today.getFullYear();
     var month = today.getMonth()+1;
     var day = today.getDate();
     var hour = today.getHours();
     var minutes = today.getMinutes();
     

     if(month.toString().length===1){
       var monthString = '0'+month
     }else{
       var monthString = ''+month
     }
     if(hour.toString().length===1){
       var hourString = '0'+hour
     }else{
       var hourString = ''+hour
     }

     if(minutes.toString().length===1){
       console.log('converting')
       minutes = parseInt('0'+minutes)
     }

     var params = '?date='+year+monthString+day+'&time='+hourString+minutes+'&timeIs=Departing';

     console.log(params);
     return params;
  }

  getData(from:string,to:string){
      this.http.get(this.Base_URL+from+'/to/'+to+this.getParams())
                     .map(this.extractData)
                     .catch(this.handleError)
                     .subscribe((data) => {
                        this.requestSource.next(data)
                     })
    
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
