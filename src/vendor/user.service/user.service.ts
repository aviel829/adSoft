import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Logger } from  '../logger.service/logger.service';
import {LocalStorageService} from '../localstorage.service/localstorage.service';
import { DataService } from '../data.service/data.service';
import { ENV } from '../../env/environment.dev';


/**
  * DATA SERVICE FOR ANGULAR 2.0.0. 
**/
@Injectable()
export class UserService {
    http : Http;
    logger : Logger;
    endPoint = '';
    userId : any;
    registerCredentials = { userName: '', password: ''};
    GivenName: String = "";

    constructor(http: Http , _logger : Logger, private LocalStorageService: LocalStorageService, private DataService: DataService) {
        this.http = http;
        this.logger = _logger;
    }

    GetUserId(){
      return this.DataService.get(ENV.api).then(
            userId => {
                if (userId && userId !== null) {
                    this.userId =userId;
                    return Promise.resolve(this.userId);
                }
            },
            err => {
                this.logger.error(err);
                return Promise.reject(err);
            });
    }

    SetUserID(id){
     this.LocalStorageService.set("useId", id);
    }

    setGivenName(name){
        this.GivenName = name;
    }

  /**
  * handleError() 
  * @input : URL handleError(error).
  * @output : show this error to comsole and reject it out.
  **/
//   private handleError(error: any): Promise<any> {
//         this.logger.error("get request to URL" , error );
//         return Promise.reject(error.message || error);
//     }

 

}