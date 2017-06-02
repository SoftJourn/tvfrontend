import {Component, Input, OnInit} from '@angular/core';
import {AppSettings} from '../config/app.config';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() items;

  apiUrl = AppSettings.API_URL;

  constructor() { }

  ngOnInit() {
  }

}
