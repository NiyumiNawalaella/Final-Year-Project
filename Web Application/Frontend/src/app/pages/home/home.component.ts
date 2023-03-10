import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import {testimonials} from '../../../assets/js/home.js';
// declare function testimonials():any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component.scss'],
})
export class HomeComponent  {

  constructor (private router: Router)
  {

  }
  ngOnInit(): void {

  }

  onSubmit(form: NgForm)
  {
    this.router.navigate(['search', form.value.search]);
  }
}
