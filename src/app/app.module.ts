import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {VoyagesModule} from './voyages/voyages.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SliderComponent } from './slider/slider.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        PageNotFoundComponent,
        SliderComponent,
        LoginComponent,
        SignupComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        VoyagesModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [{ provide: LOCALE_ID, useValue: "fr" }],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
