import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetinfoProvider {
  SERVER_PATH: any = 'http://ec2-13-209-164-128.ap-northeast-2.compute.amazonaws.com:3000/';
  constructor(public http: HttpClient) {
    // console.log('Hello InfoProvider Provider');
  }

  getUser() {
    return new Promise(resolve => {
        this.http.get(this.SERVER_PATH + '/user', { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
        subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
