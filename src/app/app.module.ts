import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IonicStorageModule } from '@ionic/storage-angular';
import { provideHttpClient } from '@angular/common/http';

import { QRCodeModule } from 'angularx-qrcode';
import { QrGeneraPage } from './qrcode/qr-genera/qr-genera.page';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    QRCodeModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideAnimationsAsync(),
    provideHttpClient() // Proporciona el cliente HTTP
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
