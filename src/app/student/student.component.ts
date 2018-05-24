import { Component , OnInit , OnDestroy } from '@angular/core';
// import { FormComponent } from '../form/form.component';
import {DomSanitizer} from '@angular/platform-browser';
import {DataService} from '../data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit , OnDestroy {

  constructor( public sanitizer: DomSanitizer, public dataservice: DataService) { }
    finalVal: any;
    finaltest: string;
    ngOnInit() {
         this.finalVal = this.dataservice.link ;
         this.finaltest = this.dataservice.test;
    }
    ngOnDestroy() {

    }
  show() {
    console.log(this.finaltest);
    // this.finalVal = this.forms.newVal;
    // return this.sanitizer.bypassSecurityTrustUrl(this.link);
  //     return console.log('hi there');
    return console.log();
  }

}
