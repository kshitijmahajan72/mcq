import { Component, OnInit , OnDestroy , Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DataService} from '../data.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
@Injectable(
)
export class FormComponent implements OnInit, OnDestroy {
   name = 'kanav';
   link = '';
    res: string;


  constructor(public dataservice: DataService) {
    this.newVal = this.res;
  }

  str: string;
  newVal: any;
  ngOnInit() {

  }
  ngOnDestroy() {
    this.dataservice.link = this.res;
    this.dataservice.test = this.name;
  }
sendValues(): void {
   this.res = this.str.substring(0, this.str.length - 11) + 'embedded=true';
   console.log(this.res);
}


}
