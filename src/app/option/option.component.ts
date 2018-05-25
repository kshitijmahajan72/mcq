import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent {

  constructor( public router: Router ) { }
  
  quiz() {
    return this.router.navigateByUrl('/teacher');
  }
  result() {
    return this.router.navigateByUrl('/topic');
  }
  

}
