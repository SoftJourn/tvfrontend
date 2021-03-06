import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ItemComponent} from './item/item.component';
import {BodyComponent} from './body/body.component';
import {CommonSettingsComponent} from './common-settings/common-settings.component';
import {LoginService} from './login/login.service';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRotingModule} from './app-routes';
import {LoginGuard} from './login/login-guard.service';
import {DashboardService} from './dashboard/dashboard.service';
import {Http} from '@angular/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {SettingsService} from './common-settings/settings.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import 'hammerjs';

export function getAuthHttp(http) {
    return new AuthHttp(new AuthConfig({
        noJwtError: true,
        globalHeaders: [{'Accept': 'application/json'}],
        tokenGetter: (() => localStorage.getItem('token')),
    }), http);
}

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
        AppRotingModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule
    ],
    providers: [
        LoginService,
        LoginGuard,
        DashboardService,
        SettingsService,
        {
            provide: AuthHttp,
            useFactory: getAuthHttp,
            deps: [Http]
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
