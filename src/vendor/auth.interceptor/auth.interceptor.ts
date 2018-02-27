import {Injectable} from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";

import {LocalStorageService} from "../localstorage.service/localstorage.service";

@Injectable()
export class PAuthInterceptor extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions ,private  _pLocalDataService : LocalStorageService ) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, this.getRequestOptionArgs(options));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(url, body, this.getRequestOptionArgs(options))
       .catch(this.onErrorResponse);
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, this.getRequestOptionArgs(options));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {  
        return super.delete(url, this.getRequestOptionArgs(options));
    }

    private onErrorResponse(rejection: any, caught: Observable<any>): Observable<any> {
      if (rejection.status === 401) {
          console.log("you're not authorized" , rejection);
      }
      return Observable.throw(rejection);
    }


    private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
         let authData = JSON.parse(this._pLocalDataService.get('authorizationData'));
          if (authData) {
               options.headers.append('Authorization', `Bearer ${authData.token}`);
           }
        return options;
    }
}