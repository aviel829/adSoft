import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Logger } from "angular2-logger/core";
import { Http } from '@angular/http';
import { ENV } from '../../env/environment.dev';


//=======================================================================
//===================== CREATED BY AVIEL ISRAELI ==============
//=======================================================================

/**
  * NotificationService FOR ANGULAR 2.0.0. 
**/
@Injectable()
export class NotificationService {

    _model = {
        userId: null,
        pushToken: null,
        userTags: null,
        message: null
    };

    /**
     * notification constructor() 
     **/
    constructor(private oneSignal: OneSignal, public _logger: Logger, public http: Http) {
    }

    _clearModel() {
        this._model.userId = null;
        this._model.pushToken = null;
        this._model.userTags = null;
        this._model.message = null;
    }

    /**
     * @name _addTag(key, value)
     * @description adds a tag (identifier) to userTags and stores it on notificationService.
     */
    _addTag(key, value) {
        this._logger.debug("[NotificationService] addTag()", key);

        // get tags from notification service
        this.oneSignal.getTags().then((tags) => {
            this._model.userTags = tags;

            // add tag value
            this._model.userTags[key] = value.toLowerCase(); // required by service

            // update tags on notification service
            this.oneSignal.sendTags(this._model.userTags);
        }, (err) => {
            this._logger.error("[NotificationService] addTag() Error: ", err);
        });

    }


    _sendNotification(appname, content, role, user) {
        this._logger.debug("[NotificationService] _sendNotification()");

        let req = {
            method: 'POST',
            url: ENV.notify,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "appname": appname,
                "content": content,
                "role": role || 'sales',
                "user": user || ''
            }
        }

        return this.http
            .post(req.url, req.data, req.method)
            .toPromise()
            .then((res) => {
                let response = res.json();
                return Promise.resolve(this._logger.debug("[NotificationService] - success", response));
            }, (err) => {
                return Promise.reject(this._logger.error("[NoticationService] - error", err));
            });
    }

    /**
     * @name getIds()
     * @description retrive notification service userid (device/app identifier) and push notification token
     */
    _getIds() {
        this._logger.debug("[NotificationService] _getIds()");

        if (this.oneSignal) {
            this.oneSignal.getIds()
                .then((jsonData) => {
                    if (jsonData) {
                        this._logger.debug("[NotificationService] getIds()", JSON.stringify(jsonData));
                        if (jsonData.userId) {
                            this._model.userId = jsonData.userId;
                        }
                        if (jsonData.pushToken) {
                            this._model.pushToken = jsonData.pushToken;
                        }
                    } else {
                        this._logger.warn("[NotificationService] getIds() - EMPTY. Check connection, iOS or Google notification service configuration.");
                        this._model.userId = null;
                        this._model.pushToken = null;
                    }
                }, (err) => {
                    this._logger.debug("[NotificationService] _getIds() ERROR: " + err);
                });
        }
    }

    /**
     * @name _onHandleNotificationOpened()
     * @description The instance will be called when a notification is tapped on from the notification shade (ANDROID) 
     * or notification center (iOS), or when closing an Alert notification shown in the app 
     * (if InApAlert is enabled in inFocusDisplaying, below).
     */
    _onHandleNotificationOpened(jsonData) {
        this._logger.debug("[NotificationService] _onHandleNotificationOpened()", JSON.stringify(jsonData));

        // TODO: PubSub raise event with notification info to be used by app logic
        //let notification = jsonData.notification || null;
        //let action = jsonData.action || null;

    }

    /**
     * @name onHandleNotificationReceived()
     * @description The instance will be called when a notification is received whether it was displayed or not. 
     */
    _onHandleNotificationReceived(jsonData) {
        this._logger.debug("[NotificationService] onHandleNotificationReceived()", JSON.stringify(jsonData))

        // TODO: Implement NotificationReceived logic
        //let notification = jsonData.notification || null;
    }

    /**
     * @name setSubscription()
     * @description subscribe or unsubscribe to notification services.
     */
    _setSubscription(enabled) {
        this._logger.info("[NotificationService] setSubscription()", enabled);

        this.oneSignal.setSubscription(enabled);
    }

    _init(identifier) {
        this._logger.info("[NotificationService] init()");

        // Initialize/Register push notification service OneSignal
        if (this.oneSignal) {
            this._setSubscription(ENV.notificationsetSubscription);
            // Set your iOS Settings
            let iosSettings = {};
            iosSettings["kOSSettingsKeyAutoPrompt"] = true;
            iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

            this.oneSignal
                .startInit(ENV.notificationAppId, ENV.googleProjectNumber)
                .inFocusDisplaying(ENV.notificationinFocusDisplaying)
                .iOSSettings(iosSettings)
                .handleNotificationReceived("_onHandleNotificationReceived")
                .handleNotificationOpened("_onHandleNotificationOpened")
                .endInit();

            // set notification service user and push ids.
            this._addTag("identifier", identifier);

        } else {
            this._logger.warn("[NoticationService] - Notification only available on Device. Aborting.");
        }

    }

    //----------------------------------------------------------------------------------
    //----------------------- NOTIFICATION DOCUMENTATION IONIC 2 -----------------------
    //----------------------------------------------------------------------------------
    // _initNotification() {
    //     this.oneSignal.startInit('b2f7f966-d8cc-11e4-bed1-df8f05be55ba', '703322744261');
    // }

    // _inFocusDisplaying() {
    //     this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InApAlert);
    // }

    // _handleNotificationReceived() {
    //     this.oneSignal.handleNotificationReceived().subscribe(() => {
    //         // do something when notification is received
    //     });
    // }

    // _handleNotificationOpened() {
    //     this.oneSignal.handleNotificationOpened().subscribe(() => {
    //         // do something when a notification is opened
    //     });
    // }

    // _endInit() {
    //     this.oneSignal.endInit();
    // }

}