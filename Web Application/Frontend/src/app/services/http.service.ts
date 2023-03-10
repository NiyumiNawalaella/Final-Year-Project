import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Shop } from '../model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getShopList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Shop>> {
    let params = new HttpParams().set('ordering', ordering);

    if(search) {
      params = new HttpParams().set('ordering', ordering).set('search',search);
    }

    return this.http.get<APIResponse<Shop>>(`${env.BASE_URL}/shops`,{
      params: params,
    });
  }
}
