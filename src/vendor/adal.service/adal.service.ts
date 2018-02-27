import { Authentication, AdalConfig } from 'adal-ts';
import { Injectable } from '@angular/core';

//=======================================================================
//===================== CREATED BY AVIEL ISRAELI=================
//=======================================================================


/*ADAL PROVIDER FOR ANGULAR 2.0.0. **/
@Injectable()
export class AdalService {

   config : AdalConfig;
   user: any;
   disableLogout: boolean = false;
   disableLogin: boolean = false;


 /**
  * login() 
  * @input : login()
  * @output :login to the adfs .
  **/
  login() {

    let context = Authentication.getContext(this.config);
    this.disableLogin = context.getUser() != null;
    
    if(this.disableLogin == false)  context.login();

  }


  /**
  * logout() 
  * @input : logout()
  * @output :logout from the system.
  **/
  logout() {
    
    let context = Authentication.getContext(this.config);
    let loggedInUser = context.getUser(); 
    this.disableLogout = loggedInUser == null;

    if(this.disableLogout == false)  context.logout();

  }

  /**
  * getUser() 
  * @input : getUser()
  * @output :get user data.
  **/
  getUser() :void {
    
    let context = Authentication.getContext(this.config);
    this.user = context.getUser();

  }

   /**
  * createConfig() 
  * @input : createConfig(_clientId: string , _tenant: string , _redirectUri: string , _postLogoutRedirectUrl?: string , _responseType?: string , _extraQueryParameters? : string).
  * @output : set adal config.
  **/
  public createConfig(_clientId: string , _tenant: string , _redirectUri: string , _postLogoutRedirectUrl?: string , _responseType?: string , _extraQueryParameters? : string) {
    
    this.config = new AdalConfig(_clientId,_tenant  ,_redirectUri ,_postLogoutRedirectUrl  ,_responseType , _extraQueryParameters);
           
    return this.config;
   }
   
  
}