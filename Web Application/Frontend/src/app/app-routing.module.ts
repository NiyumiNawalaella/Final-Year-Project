import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { HomeComponent } from './pages/home/home.component';
import { PromotionComponent } from './pages/promotion/promotion.component';
import { SearchComponent } from './pages/search/search.component';
import { AdminAccountComponent } from './pages/admin-account/admin-account.component';
import { ShopownerAccountComponent } from './pages/shopowner-account/shopowner-account.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ShopownerDashboardComponent } from './pages/shopowner-dashboard/shopowner-dashboard.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'account', component:AccountComponent},
  {path: 'promotion', component:PromotionComponent},
  {path: 'search', component:SearchComponent},
  {path: 'admin_account', component:AdminAccountComponent},
  {path: 'shopowner_account', component:ShopownerAccountComponent},
  {path: 'search/:shop-search', component:HomeComponent},
  {path: 'admin_dashboard', component:AdminDashboardComponent},
  {path: 'shopowner_dashboard', component:ShopownerDashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
