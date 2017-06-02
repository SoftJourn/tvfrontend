import {Component, OnDestroy, OnInit} from '@angular/core';
import {DashboardService} from './dashboard.service';
import {Subscription} from 'rxjs/Subscription';
import {Item} from '../item/item.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

    playlistSubscription: Subscription;
    public items;

    constructor(private dashboardService: DashboardService) {
    }


    ngOnInit() {
        this.playlistSubscription = this.dashboardService.getItems().subscribe(
            (items) => {
                this.items = items;
            } // обробка еррорів
        );
    }

    ngOnDestroy() {
        this.playlistSubscription.unsubscribe();
    }

}
