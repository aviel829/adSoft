import { Injectable } from '@angular/core';


//=======================================================================
//===================== CREATED BY AVIEL ISRAELI=================
//=======================================================================

/**
  * LOGGER FOR ANGULAR 2.0.0. 
**/
@Injectable()
export class Logger {

 /**
  * logger constructor() 
  **/
 constructor(public _logger : Logger) {
 }   

 /**
  * info() 
  * @input : info message log(message).
  * @output : throw message into the console.
  **/
  info(message : string , param? : any) {
     param? this._logger.info(message , param): this._logger.info(message);
  }

  /**
  * debug() 
  * @input : debug message log(message).
  * @output : throw message into the console.
  **/
  debug(message : string , param? : any) {
       param? this._logger.debug(message , param): this._logger.info(message);
  }

  /**
  * error() 
  * @input : info message log(message).
  * @output : throw message into the console.
  **/
  error(message : string , param? : any){
      param? this._logger.error(message , param): this._logger.info(message);
  }

   /**
  * warning() 
  * @input : info message log(message).
  * @output : throw message into the console.
  **/
  warning(message : string , param? : any){
      param? this._logger.warning(message , param): this._logger.info(message);
  }

}