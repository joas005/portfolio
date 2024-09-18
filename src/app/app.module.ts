import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BtnComponent } from './components/btn/btn.component';
import { GapComponent } from './components/gap/gap.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { FeaturedImagesComponent } from './components/featured-images/featured-images.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsImagesComponent } from './components/projects-images/projects-images.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';
import { ContactBtnsComponent } from './components/contact-btns/contact-btns.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BtnComponent,
    GapComponent,
    NavComponent,
    MainComponent,
    AboutComponent,
    FeaturedComponent,
    FeaturedImagesComponent,
    ProjectsComponent,
    ProjectsImagesComponent,
    ContactComponent,
    FooterComponent,
    MobileNavComponent,
    ContactBtnsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
