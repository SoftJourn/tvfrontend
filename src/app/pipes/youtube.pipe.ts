import {Pipe, PipeTransform, Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
    name: 'youtube'
})
@Injectable()
export class YoutubePipe implements PipeTransform {

    constructor(private dom: DomSanitizer) {

    }

    transform(value: any, args?: any): any {
        console.log(value);
        return this.dom.bypassSecurityTrustResourceUrl('https://youtube.com/embed/' + value);
    }

}
