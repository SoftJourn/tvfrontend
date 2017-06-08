import {Component, Input, OnInit} from '@angular/core';
import {AppSettings} from '../config/app.config';
import {Item} from './item.model';
import {ItemService} from './item.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() items: Item[];
  @Input() displayedItems;

  apiServer = AppSettings.API_SERVER;

  constructor(private ItemService: ItemService) { }

  ngOnInit() {
  }

  deleteItem(id: string){
    this.ItemService.deleteItem(id).subscribe(
    );
  }

}
