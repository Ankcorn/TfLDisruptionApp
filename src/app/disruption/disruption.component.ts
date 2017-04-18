import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-disruption',
  templateUrl: './disruption.component.html',
  styleUrls: ['./disruption.component.css']
})
export class DisruptionComponent implements OnInit {
  @Input() disruption;
  
  constructor() { }

  ngOnInit() {
  }

}
