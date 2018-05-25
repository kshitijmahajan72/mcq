import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTeyaTuS8UmGSxOLxmJAbamffHh2WtseAhrLQW8s9CBa2ZLIQQbWy7vjpX8Ipc_yQ1L7o-dsU0Awj74/pub?output=csv';
  csvData: any [] = [];
  constructor(private http: Http) { }

    ngOnInit() {
      this.http.get(this.csvUrl)
      .subscribe(
        data => this.extractData(data),
        err => this.handleError(err)
      );
    }
 
    private extractData(res: any) {
      let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');
    let lines = [];

    for ( let i = 0; i < allTextLines.length; i++) {
        // split content based on comma
        let data = allTextLines[i].split(',');
        if (data.length === headers.length) {
            let tarr = [];
            for ( let j = 0; j < headers.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    }
    this.csvData = lines;
    }

    private handleError (error: any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return errMsg;
    }

}
