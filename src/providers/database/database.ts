import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HomePage } from "../../pages/home/home";
import { ModalHomePage } from "../../pages/modal-home/modal-home";
import { ModalIndustryPage } from "../../pages/modal-industry/modal-industry";

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
  }

  addIndustry(data){
    console.log(data);
    var body = {
      "type": "insert", 
      "args": {
        "table": "Industry", 
        "objects": [{
          "username": data.name,
          "members": data.members,
          "summary": data.summary,
          "type": data.type
        }]
      }
    };
  }

}
