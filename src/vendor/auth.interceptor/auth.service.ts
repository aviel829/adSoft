import { ENV } from '../../env/environment.dev';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// COMMON SERVICES
import {Logger} from '../../vendor/logger.service/logger.service';
import {DataService} from '../../vendor/data.service/data.service';
import {LocalStorageService} from '../../vendor/localstorage.service/localstorage.service';

//=======================================================================
//===================== CREATED BY AVIEL ISRAELI=================
//=======================================================================


// AUTH SERVICE 
@Injectable()
export class AuthService {
 
 logger : Logger;

  /**
   * AuthService constructor
   */
  constructor(_logger : Logger  , private  _plocalStorageService : LocalStorageService , private  _pdataService  : DataService) {
     this.logger = _logger;
     this.logger.debug("AuthService constructor");
  }

  /**
  * token()
  * @ input : void
  * @ output: get token
  */
  public token(credentials) {
    this.logger.debug("token()" , credentials);
    let data = "username=" + credentials.userName + "&password=" + credentials.password;
    return  this._pdataService.post(ENV.api + 'auth/token' , data).then((response)=>{
        let authenticationResponse = response; 
          if(authenticationResponse && authenticationResponse["access_token"]){
          this._plocalStorageService.set('authorizationData', JSON.stringify({ token: authenticationResponse["access_token"] }));
          return Promise.resolve("success");
          }
         this.logger.warning("there's no token into the object , but the response has returned status OK.");
         return Promise.reject("authentication failed");
         },(err)=>{
          this.logger.error(`there's problem with the authentication ${err}`);
          return Promise.reject(err);
     });
     
      
  }
 
  /**
  * register()
  * @ input : void
  * @ output: void - move to registration state.
  */
  public register(credentials) {
       this.logger.debug("register()" , credentials);
      return Promise.resolve();
      //return  Promise.reject("you can't access to the app");
  }


  public getUser(){
    return this._pdataService.get('/data/user/getUserName').then((response)=>{
      return Promise.resolve(response);
    }, (err)=>{
      return  Promise.reject(err);
    })
  }
 
 /**
  * logout()
  * @ input : void
  * @ output: logout from the system.
  */
  public logout() {
     this.logger.debug("logout()");
     this._plocalStorageService.remove('authorizationData');
     return Promise.resolve();
     //return  Promise.reject("you can't access to the app");
  }


}