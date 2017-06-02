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
    public playlist;

    constructor(private dashboardService: DashboardService) {
    }


    ngOnInit() {
        this.playlistSubscription = this.dashboardService.getPlaylist().subscribe(
            (playlist) => {
                this.playlist = playlist;
            } // обробка еррорів
        );
    }

    ngOnDestroy() {
        this.playlistSubscription.unsubscribe();
    }

}
