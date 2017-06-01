import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ItemComponent} from './item/item.component';
import {BodyComponent} from './body/body.component';
import {CommonSettingsComponent} from './common-settings/common-settings.component';
import {ServerService} from './server.service';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRotingModule} from './app-routes';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ItemComponent,
        BodyComponent,
        CommonSettingsComponent,
        LoginComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRotingModule
    ],
    providers: [ServerService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
