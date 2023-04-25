import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BtnComponent } from './components/btn/btn.component';
import { GapComponent } from './components/gap/gap.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BtnComponent,
    GapComponent,
    NavComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
