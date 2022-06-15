import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsmapComponent } from './jsmap/jsmap.component';
import { MappositionComponent } from './mapposition/mapposition.component';
import { marcadorProvider } from './providers/marcadorProvider';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JsmapComponent,
    MappositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [marcadorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
