import {XHRBackend,  RequestOptions} from "@angular/http";
import {PAuthInterceptor} from "./auth.interceptor";
import {LocalStorageService} from "../localstorage.service/localstorage.service";

export function httpFactory(backend:XHRBackend, defaultOptions:RequestOptions , LocalStorageService : LocalStorageService )  {
            return new PAuthInterceptor(backend, defaultOptions , LocalStorageService);
        }

