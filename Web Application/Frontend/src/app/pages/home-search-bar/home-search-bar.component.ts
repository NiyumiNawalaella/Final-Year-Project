import { Component } from '@angular/core';

@Component({
  selector: 'app-home-search-bar',
  templateUrl: './home-search-bar.component.html',
  styleUrls: ['./home-search-bar.component.css','./home-search-bar.component.scss']
})
export class HomeSearchBarComponent {

  public sort: string | undefined;

  constructor() {

  }
  ngOnInit(): void {

  }
}
