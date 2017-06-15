import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MaterialModule } from '@angular/material';
// import 'hammerjs';


import { AppComponent } from './app.component';
import { EffectsComponent } from './effects/effects.component';
import { PhotoesComponent } from './photoes/photoes.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    EffectsComponent,
    PhotoesComponent
    // SliderComponent
  ],
  imports: [
    BrowserModule
    // MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
