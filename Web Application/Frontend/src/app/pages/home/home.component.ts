import { Component, OnInit } from '@angular/core';
// import {testimonials} from '../../../assets/js/home.js';
// declare function testimonials():any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  {
  title = "CodeSandbox";
  data: Testinmony[] = [];
  current: Testinmony = null;
  currentIndex: number = 0;

  constructor(private testimonyService: TestimonyService) {
    this.testimonyService.getTestimony().subscribe((data) => {
      this.data = data;
      this.current = this.data[0];
    });
  }
  switch(input: number) {
    if (input === 0 && this.currentIndex > 0) {
      this.current = this.data[this.currentIndex - 1];
      this.currentIndex--;
    }
    if (input === 1 && this.currentIndex < this.data.length - 1) {
      this.current = this.data[this.currentIndex + 1];
      this.currentIndex++;
    }
  }
}
