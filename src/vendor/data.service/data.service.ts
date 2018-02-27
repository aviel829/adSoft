import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Logger } from '../logger.service/logger.service';
import { ENV } from '../../env/environment.dev';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Geolocation } from '@ionic-native/geolocation';

/**
  * DATA SERVICE FOR ANGULAR 2.0.0. 
**/
@Injectable()
export class DataService {
  http: Http;
  logger: Logger;
  endPoint = '';

  constructor(http: Http, _logger: Logger, private geo: Geolocation) {
    this.http = http;
    this.logger = _logger;
  }

  /**
  * handleError() 
  * @input : URL handleError(error).
  * @output : show this error to comsole and reject it out.
  **/
  private handleError(error: any): Promise<any> {
    this.logger.error("get request to URL", error);
    return Promise.reject(error.message || error);
  }

  /**
   * get() 
   * @input : URL GET(url).
   * @output : get request to this url.
   **/
  get(_url) {
    this.logger.debug("get request to URL", _url);
    return this.http.get(this.endPoint + _url)
      .toPromise().then((res) => {
        let response = res.json();
        return Promise.resolve(response);
      }, (err) => {
        return this.handleError(err);
      });
  }

  /**
   * post() 
   * @input : URL post(url  , data).
   * @output : post request to this url.
   **/
  post(_url: string, _data: any, _headers?: any) {
    this.logger.debug(`post request to URL ${_url} with data`, _data);

    let headers = _headers ? new Headers(_headers) : new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post(this.endPoint + _url, _data, options)
      .toPromise()
      .then((res) => {
        this.sendLocation(_url);
        let response = res.json();
        return Promise.resolve(response);
      }, (err) => {
        return this.handleError(err);
      });
  }


  /**
   * observableGet()
   * @input  : url get(url).
   * @output : get request with observable.
   */
  observableGet(_url) {
    this.logger.debug("observable get request to URL", _url);
    return this.http.get(this.endPoint + _url);
  }

  sendLocation(url: string) {
    if (url.indexOf('token') !== -1) {
      return;
    }
    this.geo.getCurrentPosition().then((resp) => {
      var location = {
        'Latitude': resp.coords.latitude,
        'Longtitude': resp.coords.longitude
      };
      this.http.post(ENV.api, location, new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) })).toPromise().then((res) => {
        console.log(res);
      }, (err) => {
        console.error(err);
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}