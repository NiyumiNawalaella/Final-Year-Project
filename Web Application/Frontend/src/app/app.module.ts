import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sharepages/header/header.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { AboutComponent } from './pages/about/about.component';
import { PromotionComponent } from './pages/promotion/promotion.component';
import { SearchComponent } from './pages/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HomeSearchBarComponent } from './pages/home-search-bar/home-search-bar.component';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';
import { AdminAccountComponent } from './pages/admin-account/admin-account.component';
import { ShopownerAccountComponent } from './pages/shopowner-account/shopowner-account.component';
import { environment } from 'src/environments/environment';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ShopownerDashboardComponent } from './pages/shopowner-dashboard/shopowner-dashboard.component';


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
    HomeSearchBarComponent,
    AdminAccountComponent,
    ShopownerAccountComponent,
    AdminDashboardComponent,
    ShopownerDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    GaugeModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    // AngularFireModule.initializeApp(environment.firebase)
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAjxYyfii13dwqgYxIzZpcvvUSmYSwW_qs",
        authDomain: "shop-navigation-application.firebaseapp.com",
        projectId: "shop-navigation-application",
        storageBucket: "shop-navigation-application.appspot.com",
        messagingSenderId: "130061722568",
        appId: "1:130061722568:web:1ea048bdc73420d63d56fd",
        measurementId: "G-ZLZYYS2W3E"
      }
    ),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
