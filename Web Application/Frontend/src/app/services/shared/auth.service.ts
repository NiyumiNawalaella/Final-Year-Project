import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { Router } from '@angular/router';
import { of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';
// import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    uid = this.afAuth.authState.pipe(
        map(authState => authState.auth.uid),);
    shopownerid  = this.afAuth.authState.pipe(
        map(authState => authState.auth.shopownerid),);
    isAdmin = observableOf(true);

    constructor (private afAuth: AngularFireAuth) {}

    login() {

    }
    logout() {

    }
//   constructor(private fireauth : AngularFireAuth, private router: Router  ) { }

  //admin login method
//   admin_login(email:string, passsword: string)
//   {
//     this.fireauth.signInWithEmailAndPassword(email,passsword)
//     .then( () => {
//       localStorage.setItem('token','true');
//     }, err => {
//       alert('Something went wrong');
//       this.router.navigate(['/admin_account']);
//     })
//   }

//   //shop owner login method
//   shopowner_login(email:string, passsword: string)
//   {
//     this.fireauth.signInWithEmailAndPassword(email,passsword)
//     .then( () => {
//       localStorage.setItem('token','true');
//     }, err => {
//       alert(err.message);
//       this.router.navigate(['/shopowner_account']);
//     })
//   }

//   //sign out
//   logout() {
//     this.fireauth.signOut().then( ()  => {
//       localStorage.removeItem('token');
//       this.router.navigate(['/account']);

//     }, err => {
//       alert(err.message);
//     })
//   }
}
