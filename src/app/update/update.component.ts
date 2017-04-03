import { Component, OnInit, Inject } from '@angular/core';
import { TflService } from '../tfl.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 
  constructor(@Inject(TflService) private tfl) { }

  ngOnInit() {
    
  
  }

}
