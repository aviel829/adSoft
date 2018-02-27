import { Injectable, OnInit, } from '@angular/core';
import { Logger } from "angular2-logger/core";
import { DataService } from '../data.service/data.service';
import { LocalStorageService } from '../localstorage.service/localstorage.service';
import { ENV } from '../../env/environment.dev';
import { Observable } from 'rxjs/Rx';
//=======================================================================
//===================== CREATED BY AVIEL ISRAELI=================
//=======================================================================

/**
  * LOOKUP FOR ANGULAR 2.0.0. 
**/
@Injectable()
export class LookupService implements OnInit {

    lookups: Object;
    fields: any;
    refreshed: any;

    /**
     * lookup constructor() 
     **/
    constructor(public _logger: Logger, public DataService: DataService, public plocalstorage: LocalStorageService) {
    }

    ngOnInit() {
        
    }


    getAllLookups() {
        return this.DataService.get(ENV.api)
            .then((result) => {
                this.lookups = result;
                this.plocalstorage.set("lookups", JSON.stringify(this.lookups));
                return Promise.resolve(this.lookups);
            }, (err) => {
                this._logger.error(err);
                let lookupsls = JSON.parse(this.plocalstorage.get("lookups"));
                if (lookupsls) {
                    this.lookups = lookupsls;
                    return Promise.resolve(this.lookups);
                }
                else {
                    this.lookups = [];
                    return Promise.reject("failed to load lookups");
                }
            });
    }


    getAllLookupsObservable() { 
         return this.DataService.observableGet(ENV.api).do(res=>{
             this.lookups = res.json();
             this.plocalstorage.set("lookups", JSON.stringify(this.lookups));
         } , (err)=>{
                this._logger.error(err);
                let lookupsls = JSON.parse(this.plocalstorage.get("lookups"));
                if (lookupsls) {
                    this.lookups = lookupsls;
                    return this.lookups;
                }
                else {
                    this.lookups = [];
                    return Observable.throw("failed to load lookups");
                }
         });
    }

    getAllFieldsObservable() {
         return this.DataService.observableGet(ENV.api + 'data/field/getall').do(res=>{
             this.fields = res.json();
             this.plocalstorage.set("fields", JSON.stringify(this.fields));
             return this.fields;
         } , (err)=>{
             this._logger.error(err);
                let fieldsls = JSON.parse(this.plocalstorage.get("fields"));
                if (fieldsls) {
                    this.fields = fieldsls;
                    return this.fields;
                }
                else {
                    this.fields = [];
                    return Observable.throw("failed to load fields.")
                }
         });
    }

    getAllFields() {
        return this.DataService.get(ENV.api + 'data/field/getall')
            .then((result) => {
                this.fields = result;
                this.plocalstorage.set("fields", JSON.stringify(this.fields));
                return Promise.resolve(this.fields);
            }, (err) => {
                this._logger.error(err);
                let fieldsls = JSON.parse(this.plocalstorage.get("fields"));
                if (fieldsls) {
                    this.fields = fieldsls;
                    return Promise.resolve(this.fields);
                }
                else {
                    this.fields = [];
                    return Promise.reject("failed to load fields");
                }
            });
    }



      

    refreshLookups() {
        return this.DataService.get(ENV.api)
            .then((result) => {
                this.refreshed = result;
                return Promise.resolve(result);
            }, (err) => {
                this._logger.error(err);
                return Promise.reject(err);
            })
    }


}