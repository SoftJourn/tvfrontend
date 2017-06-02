import {Component, Input, OnInit} from '@angular/core';
import {SettingsService} from './settings.service';
import 'rxjs/Rx';


@Component({
    selector: 'app-common-settings',
    templateUrl: './common-settings.component.html',
    styleUrls: ['./common-settings.component.css']
})
export class CommonSettingsComponent implements OnInit {

    @Input() defaultDuration;
    @Input() plOrder;

    public showRandom;

    constructor(private settings: SettingsService) {
    }

    ngOnInit() {
        this.showRandom = (this.plOrder === 'random');
    }

    orderChange() {
        this.plOrder = (this.plOrder === 'random') ? 'date' : 'random';
        this.settings.saveOrder(this.plOrder).subscribe(
            (data) => {
                console.log(data);
            }
        );
    }

    defaultDurationChange() {
        this.settings.saveOrder(this.plOrder).subscribe(
            (data) => {
                console.log(data);
            }
        );
    }

    playNext() {
        this.settings.playNext().subscribe(
            (data) => { 
                console.log(data);
            },
            () => {
                console.log('complete');
            }
        );
    }

}
