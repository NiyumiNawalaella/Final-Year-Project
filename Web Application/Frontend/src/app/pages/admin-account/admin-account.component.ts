import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/shared/auth.service';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private auth: AuthService, public router: Router) {}

  ngOnInit(): void {

  }
  login() {
    if(this.email="")
    {
      alert("Please enter email");
      return;
    }
    if(this.password="")
    {
      alert("Please enter password");
      return;
    }
    if((this.email="admin@kzone.ac.lk") && (this.password="1WePrOvidE56"))
    {
      this.router.navigate(['/admin_dashboaord']);
    }

    this.auth.admin_login(this.email, this.password);
    this.email = "";
    this.password = "";
  }
}
