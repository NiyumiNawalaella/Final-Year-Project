import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sharepages/header/header.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { AboutComponent } from './pages/about/about.component';
import { PromotionComponent } from './pages/promotion/promotion.component';
import { SearchComponent } from './pages/search/search.component';
import { ImagePanelComponent } from './pages/image-panel/image-panel.component';
import { ModelComponent } from './pages/model/model.component';
import { TestimonyComponent } from './pages/testimony/testimony.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AccountComponent,
    AboutComponent,
    PromotionComponent,
    SearchComponent,
    ImagePanelComponent,
    ModelComponent,
    TestimonyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
