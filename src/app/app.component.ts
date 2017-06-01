import {Component} from '@angular/core';

import {ServerService} from './server.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    playlistUrl = 'http://tv.dev/index/playlist';
    constructor(private serverService: ServerService) {
        this.serverService.fetchData(this.playlistUrl).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }

}