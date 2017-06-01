import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() playlist;

  public items;
  public order;
  public defaultDuration;

  constructor() {
  }

  ngOnInit() {
    this.items = this.playlist.items;
    this.order = this.playlist.order;
    this.defaultDuration = this.playlist.defaultDuration;
  }
}
