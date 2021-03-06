import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from 'src/pages/home/home.module';
import { DiscoveryModule } from 'src/pages/discovery/discovery.module';
import { DestinationService } from 'src/services/destination.service';
import { FaqService } from 'src/services/faq.service';
import { UserService } from 'src/services/user.service';
import { DestinationModule } from 'src/pages/destination/destination.module';
import { BookingService } from 'src/services/booking.service';
import { AdminModule } from 'src/pages/admin/admin.module';
import { MotdService } from 'src/services/motd.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HomeModule,
        DiscoveryModule,
        DestinationModule,
        AdminModule
    ],
    providers: [FaqService, MotdService, DestinationService, UserService, BookingService],
    bootstrap: [AppComponent]
})
export class AppModule { }
