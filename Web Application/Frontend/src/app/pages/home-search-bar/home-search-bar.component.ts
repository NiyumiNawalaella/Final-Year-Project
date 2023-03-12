import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse, Shop } from 'src/app/model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home-search-bar',
  templateUrl: './home-search-bar.component.html',
  styleUrls: ['./home-search-bar.component.css','./home-search-bar.component.scss']
})
export class HomeSearchBarComponent {

  public sort: string | undefined;
  public shops: Array<Shop> | undefined;

  constructor(private httpService: HttpService,
    private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['shop-search']) {
        this.searchShops('metacript',params['shop-search']);
      }
      else {
        this.searchShops('metacript');
      }
    });
  }

  searchShops(sort: string, search?: string): void {
    this.httpService
    .getShopList(sort, search)
    .subscribe((shopList: APIResponse<Shop>)=> {
      this.shops = shopList.results;
      console.log(shopList);
    });
  }
}
