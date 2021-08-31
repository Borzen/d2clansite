import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BigpannelComponent } from './bigpannel/bigpannel.component';
import { ContentComponent } from './content/content.component';
import { FullpageComponent } from './fullpage/fullpage.component';

@NgModule({
  declarations: [
    AppComponent,
    BigpannelComponent,
    ContentComponent,
    FullpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
