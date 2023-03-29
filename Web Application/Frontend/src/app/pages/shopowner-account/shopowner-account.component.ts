import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/shared/auth.service';

@Component({
  selector: 'app-shopowner-account',
  templateUrl: './shopowner-account.component.html',
  styleUrls: ['./shopowner-account.component.css']
})
export class ShopownerAccountComponent implements OnInit {
//   email: string = "";
//   password: string = "";

//   constructor(private auth: AuthService) {}

  ngOnInit(): void {

  }
//   login() {
//     if(this.email=="")
//     {
//       alert("Please enter email");
//       return;
//     }
//     if(this.password=="")
//     {
//       alert("Please enter password");
//       return;
//     }

//     this.auth.shopowner_login(this.email, this.password);
//     this.email = "";
//     this.password = "";
//   }
}
