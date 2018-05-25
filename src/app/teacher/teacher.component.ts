import { Component ,OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
    window.location.href = 'https://docs.google.com/forms/d/1bpSrJdB5ZgqvmPUvM5BlwBGxP6R-VUHGzHdktgil7Lg/edit';
  }

}
