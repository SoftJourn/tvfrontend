import {Component, Input, OnInit} from '@angular/core';
import {AppSettings} from '../config/app.config';
import {Item} from './item.model';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() items: Item[];
  @Input() displayedItems;

  apiServer = AppSettings.API_SERVER;

  constructor() { }

  ngOnInit() {
    console.log(this.displayedItems);
  }

}
