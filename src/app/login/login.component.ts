import { Component } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(public afAuth: AngularFireAuth , public router: Router) { }
  // login() {
  //   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((sucess) => {
  //     this.router.navigate(['/topic']);
  // });
}

