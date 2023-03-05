import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { HomeComponent } from './pages/home/home.component';
import { PromotionComponent } from './pages/promotion/promotion.component';
import { SearchComponent } from './pages/search/search.component';
import { ImagePanelComponent } from './pages/image-panel/image-panel.component';
import { ModelComponent } from './pages/model/model.component';
import { TestimonyComponent } from './pages/testimony/testimony.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'account', component:AccountComponent},
  {path: 'promotion', component:PromotionComponent},
  {path:  'search', component:SearchComponent},
  {path: 'image-panel', component:ImagePanelComponent},
  {path: 'testimony', component:TestimonyComponent},
  {path: 'model', component:ModelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
