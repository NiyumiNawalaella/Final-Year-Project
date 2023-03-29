import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/shared/auth.service';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {

  email: string = "admin@kzone.ac.lk";
  password: string = "1WePrOvidE56";

  constructor(private auth: AuthService) {}

  ngOnInit(): void {

  }
  login() {
    if(this.email=="")
    {
      alert("Please enter email");
      return;
    }
    if(this.password=="")
    {
      alert("Please enter password");
      return;
    }

    this.auth.admin_login(this.email, this.password);
    this.email = "";
    this.password = "";
  }
}
