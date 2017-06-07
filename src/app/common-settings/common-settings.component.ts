import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {SettingsService} from './settings.service';
import 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';


@Component({
    selector: 'app-common-settings',
    templateUrl: './common-settings.component.html',
    styleUrls: ['./common-settings.component.css']
})
export class CommonSettingsComponent implements OnInit, OnDestroy {

    @Output() enabledItems = new EventEmitter<boolean>();

    public showRandom;
    public order;
    public defaultDuration;
    itemsTurn = true;
    settingsSubscription: Subscription;

    constructor(private settings: SettingsService) {
    }

    ngOnInit() {
        this.settingsSubscription = this.settings.getSettings().subscribe(
            (settings) => {
                console.log(settings.order);
                this.order = settings.order;
                this.defaultDuration = settings.defaultDuration;
                this.showRandom = (settings.order === 'random');
            }
        );
    }

    orderChange() {
        this.settings.saveOrder(this.showRandom).subscribe(
            (data) => {
                console.log(data);
            }
        );
    }

    defaultDurationChange() {
        this.settings.saveDefDuration(this.defaultDuration).subscribe(
            (data) => {
                console.log(data);
            }
        );
    }

    playNext() {
        this.settings.playNext().subscribe(
            (data) => {
                console.log(data);
            }
        );
    }

    enableItemsChange() {
        this.enabledItems.emit(this.itemsTurn);
    }

    ngOnDestroy() {
        this.settingsSubscription.unsubscribe();
    }

}
