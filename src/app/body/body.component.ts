import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() items;

  displayedItems = true;

  constructor() {
  }

  ngOnInit() {
  }

  changeEnabledItems(enabled: boolean) {
    this.displayedItems = enabled;
  }


}
