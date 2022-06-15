import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapposition',
  templateUrl: './mapposition.component.html',
  styleUrls: ['./mapposition.component.css']
})
export class MappositionComponent {

  @Output() notify = new EventEmitter();

}

