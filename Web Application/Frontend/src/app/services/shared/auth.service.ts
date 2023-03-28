import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router: Router  ) { }

  //admin login method
  admin_login(email:string, passsword: string)
  {
    this.fireauth.signInWithEmailAndPassword(email,passsword)
    .then( () => {
      localStorage.setItem('token','true');
    }, err => {
      alert('Something went wrong');
      this.router.navigate(['/admin_account']);
    })
  }
}
