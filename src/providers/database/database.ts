import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HomePage } from "../../pages/home/home";
import { ModalHomePage } from "../../pages/modal-home/modal-home";
import { ModalIndustryPage } from "../../pages/modal-industry/modal-industry";


const apiUrl: string = 'https://data.diatonic70.hasura-app.io/v1/query';

@Injectable()
export class DatabaseProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DatabaseProvider Provider');
  }

  addHome(data) {
    console.log(data);
    var body = {
      "type": "insert", 
      "args": {
        "table": "Home", 
        "objects": [{
          "username": data.name,
          "members": data.members,
          "summary": data.summary,
          "area": data.area
        }]
      }
    };

    console.log(JSON.stringify(body));
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl, JSON.stringify(body))
        .subscribe(res => {
          console.log(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });  
  }

  addIndustry(data){
    console.log(data);
    var body = {
      "type": "insert", 
      "args": {
        "table": "Industry", 
        "objects": [{
          "i_name": data.name,
          "i_type": data.type,
          "requirement": data.members,
          "summary": data.summary,
          "approval": "false"
        }]
      }
    };

    console.log(JSON.stringify(body));
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl, JSON.stringify(body))
        .subscribe(res => {
          console.log(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
