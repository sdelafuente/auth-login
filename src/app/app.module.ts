import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PublicDealsComponent } from './public-deals/public-deals.component';
import { PrivateDealsComponent } from './private-deals/private-deals.component';
import { CallbackComponent } from './callback.component';

import { DealService } from './servicios/deal.service';
import { AuthService } from './servicios/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    PublicDealsComponent,
    PrivateDealsComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      DealService,
      AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
