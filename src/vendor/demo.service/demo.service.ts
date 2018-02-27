import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Logger } from '../logger.service/logger.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
  * DATA SERVICE FOR ANGULAR 2.0.0. 
**/
@Injectable()
export class DemoService {
  logger: Logger;
  demoMode: boolean;
  workOrdersDemo : any;
  lookupsDemo : any;
  fieldsDemo : any;

  constructor(_logger: Logger ) {
    this.loadDemoData();
    this.logger = _logger;
  }

  ngOnInit(){
    this.demoMode = false;
  }



  
   

    loadDemoData() { 
         this.lookupsDemo = {
                "cutoff": [
                    {
                        "id": null,
                        "value": "מלל של ניתוק"
                    }
                ],
                "serviceproductinventoryproduct": [
                    {
                        "id": "da4b0162-3f08-e711-80d4-00155dcce607",
                        "value": "לוח מקשים -665"
                    },
                    {
                        "id": "28442cf4-d41a-e711-80d6-00155dcce607",
                        "value": "Test"
                    },
                    {
                        "id": "5b42060c-d51a-e711-80d6-00155dcce607",
                        "value": "Test"
                    },
                    {
                        "id": "3727cb55-ae1e-e711-80d6-00155dcce607",
                        "value": "test"
                    },
                    {
                        "id": "4cb23044-2f21-e711-80d7-00155dcce607",
                        "value": "1423"
                    },
                    {
                        "id": "ac93207c-9926-e711-80d7-00155dcce607",
                        "value": "‎Bundle- ‎TEST2"
                    },
                    {
                        "id": "df8f2655-1335-e711-80d7-00155dcce607",
                        "value": "‎התקנת  מערכת איתור פעילה- ‎דמי אכיפה - רכב פרטי"
                    },
                    {
                        "id": "1aa74b02-1435-e711-80d7-00155dcce607",
                        "value": "‎התקנת  מערכת איתור פעילה- ‎MAX"
                    },
                    {
                        "id": "7b7d4737-1435-e711-80d7-00155dcce607",
                        "value": "‎התקנת  מערכת איתור פעילה- ‎MAX"
                    },
                    {
                        "id": "f58c8c2b-ff39-e711-80d8-00155dcce607",
                        "value": "‎מערכת פעילה+מיגון ועלוקה- ‎MAX"
                    },
                    {
                        "id": "4a82a792-a948-e711-80d9-00155dcce607",
                        "value": "‎פעילה + דמי מנוי- ‎123"
                    },
                    {
                        "id": "2bdef9be-a948-e711-80d9-00155dcce607",
                        "value": "‎מערכת פעילה+מיגון ועלוקה- ‎123"
                    },
                    {
                        "id": "ad8679a2-a64a-e711-80d9-00155dcce607",
                        "value": "‎הוספת לוח מקשים- ‎TEST2"
                    },
                    {
                        "id": "7ef1fa10-b44a-e711-80d9-00155dcce607",
                        "value": "‎התקנת  מערכת איתור פעילה- ‎123"
                    },
                    {
                        "id": "112610ab-b84a-e711-80d9-00155dcce607",
                        "value": "‎החלפת לוח מקשים- ‎החלפת לוח מקשים"
                    },
                    {
                        "id": "415a981d-c24a-e711-80d9-00155dcce607",
                        "value": "‎TEST2- ‎call center"
                    },
                    {
                        "id": "bad9e564-9359-e711-80db-00155dcce607",
                        "value": "‎הוספת עלוקה- ‎הוספת עלוקה"
                    },
                    {
                        "id": "78410041-f75b-e711-80db-00155dcce607",
                        "value": "‎התקנת  מערכת איתור פעילה- ‎CE824V"
                    },
                    {
                        "id": "dfe5dd98-f95b-e711-80db-00155dcce607",
                        "value": null
                    },
                    {
                        "id": "c3b089e7-065c-e711-80db-00155dcce607",
                        "value": "‎מערכת פעילה+מיגון ועלוקה- ‎מערכת פעילה+מיגון ועלוקה"
                    },
                    {
                        "id": "1f1ec80c-075c-e711-80db-00155dcce607",
                        "value": "‎מערכת פעילה+מיגון ועלוקה- ‎מערכת פעילה+מיגון ועלוקה"
                    },
                    {
                        "id": "75abb512-095c-e711-80db-00155dcce607",
                        "value": "‎התקנת  מערכת איתור פעילה- ‎התקנת  מערכת איתור פעילה"
                    },
                    {
                        "id": "9bdf414b-ec5f-e711-80db-00155dcce607",
                        "value": "‎123- ‎123"
                    },
                    {
                        "id": "65dfcb56-ec5f-e711-80db-00155dcce607",
                        "value": "‎123- ‎123"
                    },
                    {
                        "id": "4d1785ac-ad60-e711-80db-00155dcce607",
                        "value": "‎התקנת  מערכת איתור פעילה- ‎CE824V"
                    },
                    {
                        "id": "16c66234-4661-e711-80db-00155dcce607",
                        "value": "‎התקנת  מערכת איתור פעילה- ‎CE824V"
                    },
                    {
                        "id": "ce372559-7964-e711-80db-00155dcce607",
                        "value": "‎התקנת  מערכת איתור פעילה- ‎ big bundle "
                    },
                    {
                        "id": "741614ac-be64-e711-80db-00155dcce607",
                        "value": "‎*בדיקות מוצר נועם- ‎Marat Overlapping Test"
                    },
                    {
                        "id": "7911f62d-fb64-e711-80db-00155dcce607",
                        "value": "‎גלאי רוורס- ‎Bundle"
                    },
                    {
                        "id": "aeb703d0-9f68-e711-80db-00155dcce607",
                        "value": "‎ big bundle - ‎ big bundle "
                    }
                ],
                "assetneutralizationmethod": [
                    {
                        "id": "1",
                        "value": "אין"
                    },
                    {
                        "id": "2",
                        "value": "קודן"
                    },
                    {
                        "id": "3",
                        "value": "שלט קוד"
                    },
                    {
                        "id": "4",
                        "value": "לחצן"
                    },
                    {
                        "id": "5",
                        "value": "רב קודן"
                    },
                    {
                        "id": "6",
                        "value": "רוזמן"
                    },
                    {
                        "id": "7",
                        "value": "RFID"
                    },
                    {
                        "id": "8",
                        "value": "שלט מאסטר"
                    }
                ],
                "reportstatus": [
                    {
                        "id": "1",
                        "value": "אין"
                    },
                    {
                        "id": "2",
                        "value": "קודן"
                    },
                    {
                        "id": "3",
                        "value": "שלט קוד"
                    },
                    {
                        "id": "4",
                        "value": "לחצן"
                    },
                    {
                        "id": "5",
                        "value": "רב קודן"
                    },
                    {
                        "id": "6",
                        "value": "רוזמן"
                    },
                    {
                        "id": "7",
                        "value": "RFID"
                    },
                    {
                        "id": "8",
                        "value": "שלט מאסטר"
                    }
                ],
                "detectionsystemlocation": [
                    {
                        "id": "1",
                        "value": "אין"
                    },
                    {
                        "id": "2",
                        "value": "קודן"
                    },
                    {
                        "id": "3",
                        "value": "שלט קוד"
                    },
                    {
                        "id": "4",
                        "value": "לחצן"
                    },
                    {
                        "id": "5",
                        "value": "רב קודן"
                    },
                    {
                        "id": "6",
                        "value": "רוזמן"
                    },
                    {
                        "id": "7",
                        "value": "RFID"
                    },
                    {
                        "id": "8",
                        "value": "שלט מאסטר"
                    }
                ],
                "protectionsystemversionid": [
                    {
                        "id": "1",
                        "value": "אין"
                    },
                    {
                        "id": "2",
                        "value": "קודן"
                    },
                    {
                        "id": "3",
                        "value": "שלט קוד"
                    },
                    {
                        "id": "4",
                        "value": "לחצן"
                    },
                    {
                        "id": "5",
                        "value": "רב קודן"
                    },
                    {
                        "id": "6",
                        "value": "רוזמן"
                    },
                    {
                        "id": "7",
                        "value": "RFID"
                    },
                    {
                        "id": "8",
                        "value": "שלט מאסטר"
                    }
                ],
                "alukaposition": [
                    {
                        "id": "1",
                        "value": "אין"
                    },
                    {
                        "id": "2",
                        "value": "קודן"
                    },
                    {
                        "id": "3",
                        "value": "שלט קוד"
                    },
                    {
                        "id": "4",
                        "value": "לחצן"
                    },
                    {
                        "id": "5",
                        "value": "רב קודן"
                    },
                    {
                        "id": "6",
                        "value": "רוזמן"
                    },
                    {
                        "id": "7",
                        "value": "RFID"
                    },
                    {
                        "id": "8",
                        "value": "שלט מאסטר"
                    }
                ],
                "product": [
                    {
                        "id": "d69b65eb-7a0f-e611-80d1-00155dcc27de",
                        "value": "test product"
                    },
                    {
                        "id": "8fb53f1c-7c0f-e611-80d1-00155dcc27de",
                        "value": "test2 product"
                    },
                    {
                        "id": "7ff354eb-11d1-e611-80cd-00155dcce607",
                        "value": "*בדיקות מוצר נועם"
                    },
                    {
                        "id": "fb096d7b-cfe3-e611-80ce-00155dcce607",
                        "value": "123"
                    },
                    {
                        "id": "1132e3e7-1bfc-e611-80d4-00155dcce607",
                        "value": "TEST2"
                    },
                    {
                        "id": "3fb02afc-3d08-e711-80d4-00155dcce607",
                        "value": "דמי אכיפה - רכב פרטי"
                    },
                    {
                        "id": "ab86cd41-3e08-e711-80d4-00155dcce607",
                        "value": "הרחבת אחריות"
                    },
                    {
                        "id": "d84b0162-3f08-e711-80d4-00155dcce607",
                        "value": "הוספת לוח מקשים"
                    },
                    {
                        "id": "55cf4e4d-0b35-e711-80d7-00155dcce607",
                        "value": "פעילה + דמי מנוי"
                    },
                    {
                        "id": "807c0520-0c35-e711-80d7-00155dcce607",
                        "value": "התקנת  מערכת איתור פעילה"
                    },
                    {
                        "id": "19270fd0-1335-e711-80d7-00155dcce607",
                        "value": "CE824V"
                    },
                    {
                        "id": "0867dff6-fe39-e711-80d8-00155dcce607",
                        "value": "מערכת פעילה+מיגון ועלוקה"
                    },
                    {
                        "id": "c06a8cc9-7052-e711-80db-00155dcce607",
                        "value": "Marat Overlapping Test"
                    },
                    {
                        "id": "028788d1-ca54-e711-80db-00155dcce607",
                        "value": "Call Center  - דלק מוטורס"
                    },
                    {
                        "id": "a73f61d1-6556-e711-80db-00155dcce607",
                        "value": "456"
                    },
                    {
                        "id": "6b64a1a0-c05a-e711-80db-00155dcce607",
                        "value": "גלאי רוורס"
                    },
                    {
                        "id": "760f2b8a-9360-e711-80db-00155dcce607",
                        "value": "מערכת פעילה + דמי מנוי"
                    },
                    {
                        "id": "c581917e-c960-e711-80db-00155dcce607",
                        "value": "מערכת פעילה+מיגון ועלוקה-201707041800196091"
                    },
                    {
                        "id": "d7072c68-1e62-e711-80db-00155dcce607",
                        "value": " big bundle "
                    },
                    {
                        "id": "99f1ea21-2862-e711-80db-00155dcce607",
                        "value": "test"
                    },
                    {
                        "id": "cb606cbb-3e62-e711-80db-00155dcce607",
                        "value": "biggest bundle"
                    },
                    {
                        "id": "bb75c6ac-f369-e711-80dc-00155dcce607",
                        "value": "בדיקה דלית"
                    },
                    {
                        "id": "677373e7-f469-e711-80dc-00155dcce607",
                        "value": "בדיקת מוצרי חבילה"
                    },
                    {
                        "id": "89787071-d6a1-e611-80d4-00155dcceb81",
                        "value": "test2 product-201611031701489023"
                    },
                    {
                        "id": "4f64ce4b-d9a1-e611-80d4-00155dcceb81",
                        "value": "Family"
                    },
                    {
                        "id": "0e7dbe24-daa1-e611-80d4-00155dcceb81",
                        "value": "Bundle"
                    },
                    {
                        "id": "5f4340cc-8dbf-e611-80c9-00155dcceb86",
                        "value": "call center"
                    },
                    {
                        "id": "648c758e-b1c5-e611-80ca-00155dcceb86",
                        "value": "החלפת לוח מקשים"
                    },
                    {
                        "id": "efd6b9c3-b1c5-e611-80ca-00155dcceb86",
                        "value": "הוספת עלוקה"
                    }
                ]
            };
            this.fieldsDemo ={
    "detect": [
        {
            "key": "firstCutoffId",
            "label": "ניתוק ראשון",
            "controlType": "drop-down",
            "lookupName": "cutoff",
            "required": true,
            "order": 1,
            "disabled": false
        },
        {
            "key": "cutoff",
            "label": "ניתוק אחר",
            "lookupName": "cutoff",
            "controlType": "number",
            "required": true,
            "order": 2,
            "placeholder": "אנא הקלד ניתוק",
            "disabled": false
        },
        {
            "key": "neutralizationMethod",
            "label": "שיטת ניטרול ",
            "controlType": "drop-down",
            "lookupName": "assetneutralizationmethod",
            "required": true,
            "order": 3,
            "disabled": false
        },
        {
            "key": "neutralizationCode",
            "label": "קוד נטרול",
            "controlType": "text-box",
            "maxlength": "4",
            "value": "neutralizationCode",
            "required": true,
            "order": 4,
            "placeholder": "אנא הקלד קוד",
            "disabled": false
        },
        {
            "key": "removedSerialProduct",
            "label": "RMU משדר מפורק",
            "controlType": "text-box",
            "value": "removedSerialProduct",
            "required": false,
            "order": 5,
            "disabled": false
        },
        {
            "key": "cutoffConnection",
            "label": "גישור ניתוק",
            "controlType": "toggle",
            "required": false,
            "order": 6,
            "disabled": false
        },
        {
            "key": "detectionSystemLocation",
            "label": "מיקום מערכת איתור ",
            "controlType": "drop-down",
            "lookupName": "detectionsystemlocation",
            "required": false,
            "order": 7,
            "disabled": false
        },
        {
            "key": "installatorlRemarks",
            "label": "הערות מתקין",
            "controlType": "textarea",
            "required": true,
            "order": 8,
            "rows": 6,
            "disabled": false
        },
        {
            "key": "signature",
            "label": "חתימת לקוח",
            "controlType": "signature",
            "icon": "arrow-dropdown",
            "showDetails": false,
            "required": true,
            "order": 9
        },
        {
            "key": "save",
            "label": "שמירה",
            "controlType": "engineeringtest",
            "labelA": "קוד תקשורת",
            "required": false,
            "order": 10,
            "disabled": false,
            "onClick": "sendData",
            "onClickA": "openUrl",
            "class": "col-6",
            "color": "dark",
            "colorA": "danger"
        }
    ],
    "detectProtect": [
        {
            "key": "firstCutoffId",
            "label": "ניתוק ראשון",
            "controlType": "drop-down",
            "lookupName": "cutoff",
            "required": true,
            "order": 1,
            "disabled": false
        },
        {
            "key": "cutoff",
            "label": "ניתוק אחר",
            "lookupName": "cutoff",
            "controlType": "text-box",
            "required": true,
            "order": 2,
            "placeholder": "אנא הקלד ניתוק",
            "disabled": false
        },
        {
            "key": "neutralizationMethod",
            "label": "שיטת ניטרול ",
            "controlType": "drop-down",
            "lookupName": "assetneutralizationmethod",
            "required": true,
            "order": 3,
            "disabled": false
        },
        {
            "key": "neutralizationCode",
            "label": "קוד נטרול",
            "controlType": "text-box",
            "maxlength": "4",
            "value": "neutralizationCode",
            "required": true,
            "order": 4,
            "placeholder": "אנא הקלד קוד",
            "disabled": false
        },
        {
            "key": "removedSerialProduct",
            "label": "RMU משדר מפורק",
            "controlType": "text-box",
            "value": "removedSerialProduct",
            "required": false,
            "order": 5,
            "disabled": false
        },
        {
            "key": "cutoffConnection",
            "label": "גישור ניתוק",
            "controlType": "toggle",
            "required": false,
            "order": 6,
            "disabled": false
        },
        {
            "key": "detectionSystemLocation",
            "label": "מיקום מערכת איתור ",
            "controlType": "drop-down",
            "lookupName": "detectionsystemlocation",
            "required": false,
            "order": 7,
            "disabled": false
        },
        {
            "key": "installatorlRemarks",
            "label": "הערות מתקין",
            "controlType": "textarea",
            "required": true,
            "order": 8,
            "rows": 6,
            "disabled": false
        },
        {
            "key": "protectionSystemVersionid",
            "label": "גרסת מערכת מיגון ",
            "controlType": "drop-down",
            "lookupName": "protectionsystemversionid",
            "required": false,
            "order": 9,
            "disabled": false
        },
        {
            "key": "protectionSystemSN",
            "label": "מספר אצווה - מח מיגון",
            "value": "protectionSystemSN",
            "controlType": "text-box",
            "required": false,
            "order": 10,
            "placeholder": "אנא הקלד מספר",
            "disabled": false
        },
        {
            "key": "protectionSystemBatchNumber",
            "label": "מספר סריאלי - מח מיגון",
            "controlType": "text-box",
            "value": "protectionSystemBatchNumber",
            "required": false,
            "order": 11,
            "placeholder": "אנא הקלד מספר",
            "disabled": false
        },
        {
            "key": "remoteControlIntegration",
            "label": "איחוד שלטים",
            "controlType": "toggle",
            "required": false,
            "order": 12,
            "disabled": false
        },
        {
            "key": "signature",
            "label": "חתימת לקוח",
            "controlType": "signature",
            "icon": "arrow-dropdown",
            "showDetails": false,
            "required": true,
            "order": 13
        },
        {
            "key": "save",
            "label": "שמירה",
            "labelA": "קוד תקשורת",
            "controlType": "engineeringtest",
            "required": false,
            "order": 14,
            "disabled": false,
            "onClick": "sendData",
            "onClickA": "openUrl",
            "class": "col-6",
            "color": "dark",
            "colorA": "danger"
        }
    ],
    "detectProtectLeech": [
        {
            "key": "firstCutoffId",
            "label": "ניתוק ראשון",
            "controlType": "drop-down",
            "lookupName": "cutoff",
            "required": true,
            "order": 1,
            "disabled": false
        },
        {
            "key": "cutoff",
            "label": "ניתוק אחר",
            "lookupName": "cutoff",
            "controlType": "text-box",
            "required": true,
            "order": 2,
            "placeholder": "אנא הקלד ניתוק",
            "disabled": false
        },
        {
            "key": "neutralizationMethod",
            "label": "שיטת ניטרול ",
            "controlType": "drop-down",
            "lookupName": "assetneutralizationmethod",
            "required": true,
            "order": 3,
            "disabled": false
        },
        {
            "key": "neutralizationCode",
            "label": "קוד נטרול",
            "controlType": "text-box",
            "maxlength": "4",
            "value": "neutralizationCode",
            "required": true,
            "order": 4,
            "placeholder": "אנא הקלד קוד",
            "disabled": false
        },
        {
            "key": "removedSerialProduct",
            "label": "RMU משדר מפורק",
            "controlType": "text-box",
            "value": "removedSerialProduct",
            "required": false,
            "order": 5,
            "disabled": false
        },
        {
            "key": "cutoffConnection",
            "label": "גישור ניתוק",
            "controlType": "toggle",
            "required": false,
            "order": 6,
            "disabled": false
        },
        {
            "key": "detectionSystemLocation",
            "label": "מיקום מערכת איתור ",
            "controlType": "drop-down",
            "lookupName": "detectionsystemlocation",
            "required": false,
            "order": 7,
            "disabled": false
        },
        {
            "key": "installatorlRemarks",
            "label": "הערות מתקין",
            "controlType": "text-box",
            "value": "installatorlRemarks",
            "required": true,
            "order": 8,
            "placeholder": "אנא הקלד הערות",
            "disabled": false
        },
        {
            "key": "protectionSystemVersionid",
            "label": "גרסת מערכת מיגון ",
            "controlType": "drop-down",
            "lookupName": "protectionsystemversionid",
            "required": false,
            "order": 9,
            "disabled": false
        },
        {
            "key": "protectionSystemSN",
            "label": "מספר אצווה - מח מיגון",
            "value": "protectionSystemSN",
            "controlType": "text-box",
            "required": false,
            "order": 10,
            "placeholder": "אנא הקלד מספר",
            "disabled": false
        },
        {
            "key": "protectionSystemBatchNumber",
            "label": "מספר סריאלי - מח מיגון",
            "controlType": "text-box",
            "value": "protectionSystemBatchNumber",
            "required": false,
            "order": 12,
            "placeholder": "אנא הקלד מספר",
            "disabled": false
        },
        {
            "key": "remoteControlIntegration",
            "label": "איחוד שלטים",
            "controlType": "toggle",
            "required": false,
            "order": 13,
            "disabled": false
        },
        {
            "key": "leechSN",
            "label": "קוד סריאלי - עלוקה",
            "controlType": "text-box",
            "value": "leechSN",
            "required": false,
            "order": 14,
            "disabled": false
        },
        {
            "key": "leechLearningCode",
            "label": "קוד לימוד עלוקה",
            "controlType": "text-box",
            "value": "leechLearningCode",
            "required": false,
            "order": 15,
            "disabled": false
        },
        {
            "key": "lecchLocation",
            "label": "מיקום עלוקה ",
            "controlType": "drop-down",
            "lookupName": "protectionsystemversionid",
            "required": false,
            "order": 16,
            "disabled": false
        },
        {
            "key": "signature",
            "label": "חתימת לקוח",
            "controlType": "signature",
            "icon": "arrow-dropdown",
            "showDetails": false,
            "required": true,
            "order": 17
        },
        {
            "key": "save",
            "label": "שמירה",
            "labelA": "קוד תקשורת",
            "controlType": "engineeringtest",
            "required": false,
            "order": 18,
            "disabled": false,
            "onClick": "sendData",
            "onClickA": "openUrl",
            "class": "col-6",
            "color": "dark",
            "colorA": "danger"
        }
    ],
    "Protect": [
        {
            "key": "firstCutoffId",
            "label": "ניתוק ראשון",
            "controlType": "drop-down",
            "lookupName": "cutoff",
            "required": true,
            "order": 1,
            "disabled": false
        },
        {
            "key": "cutoff",
            "label": "ניתוק אחר",
            "lookupName": "cutoff",
            "controlType": "text-box",
            "required": true,
            "order": 2,
            "placeholder": "אנא הקלד ניתוק",
            "disabled": false
        },
        {
            "key": "neutralizationMethod",
            "label": "שיטת ניטרול ",
            "controlType": "drop-down",
            "lookupName": "assetneutralizationmethod",
            "required": true,
            "order": 3,
            "disabled": false
        },
        {
            "key": "neutralizationCode",
            "label": "קוד נטרול",
            "controlType": "text-box",
            "maxlength": "4",
            "value": "neutralizationCode",
            "required": true,
            "order": 4,
            "placeholder": "אנא הקלד קוד",
            "disabled": false
        },
        {
            "key": "installatorlRemarks",
            "label": "הערות מתקין",
            "controlType": "textarea",
            "required": true,
            "order": 5,
            "rows": 6,
            "disabled": false
        },
        {
            "key": "protectionSystemVersionid",
            "label": "גרסת מערכת מיגון ",
            "controlType": "drop-down",
            "lookupName": "protectionsystemversionid",
            "required": false,
            "order": 6,
            "disabled": false
        },
        {
            "key": "protectionSystemSN",
            "label": "מספר אצווה - מח מיגון",
            "value": "protectionSystemSN",
            "controlType": "text-box",
            "required": false,
            "order": 7,
            "placeholder": "אנא הקלד מספר",
            "disabled": false
        },
        {
            "key": "protectionSystemBatchNumber",
            "label": "מספר סריאלי - מח מיגון",
            "controlType": "text-box",
            "value": "protectionSystemBatchNumber",
            "required": false,
            "order": 8,
            "placeholder": "אנא הקלד מספר",
            "disabled": false
        },
        {
            "key": "remoteControlIntegration",
            "label": "איחוד שלטים",
            "controlType": "toggle",
            "required": false,
            "order": 9,
            "disabled": false
        },
        {
            "key": "signature",
            "label": "חתימת לקוח",
            "controlType": "signature",
            "icon": "arrow-dropdown",
            "showDetails": false,
            "required": true,
            "order": 10
        },
        {
            "key": "save",
            "label": "שמירה",
            "labelA": "קוד תקשורת",
            "controlType": "engineeringtest",
            "required": false,
            "order": 11,
            "disabled": false,
            "onClick": "sendData",
            "onClickA": "openUrl",
            "class": "col-6",
            "color": "dark",
            "colorA": "danger"
        }
    ],
    "protectLeech": [
        {
            "key": "firstCutoffId",
            "label": "ניתוק ראשון",
            "controlType": "drop-down",
            "lookupName": "cutoff",
            "required": true,
            "order": 1,
            "disabled": false
        },
        {
            "key": "cutoff",
            "label": "ניתוק אחר",
            "lookupName": "cutoff",
            "controlType": "text-box",
            "required": true,
            "order": 2,
            "placeholder": "אנא הקלד ניתוק",
            "disabled": false
        },
        {
            "key": "neutralizationMethod",
            "label": "שיטת ניטרול ",
            "controlType": "drop-down",
            "lookupName": "assetneutralizationmethod",
            "required": true,
            "order": 3,
            "disabled": false
        },
        {
            "key": "neutralizationCode",
            "label": "קוד נטרול",
            "controlType": "text-box",
            "maxlength": "4",
            "value": "neutralizationCode",
            "required": true,
            "order": 4,
            "placeholder": "אנא הקלד קוד",
            "disabled": false
        },
        {
            "key": "installatorlRemarks",
            "label": "הערות מתקין",
            "controlType": "textarea",
            "required": true,
            "order": 5,
            "rows": 6,
            "disabled": false
        },
        {
            "key": "protectionSystemVersionid",
            "label": "גרסת מערכת מיגון ",
            "controlType": "drop-down",
            "lookupName": "protectionsystemversionid",
            "required": false,
            "order": 6,
            "disabled": false
        },
        {
            "key": "protectionSystemSN",
            "label": "מספר אצווה - מח מיגון",
            "value": "protectionSystemSN",
            "controlType": "text-box",
            "required": false,
            "order": 7,
            "placeholder": "אנא הקלד מספר",
            "disabled": false
        },
        {
            "key": "protectionSystemBatchNumber",
            "label": "מספר סריאלי - מח מיגון",
            "controlType": "text-box",
            "value": "protectionSystemBatchNumber",
            "required": false,
            "order": 8,
            "placeholder": "אנא הקלד מספר",
            "disabled": false
        },
        {
            "key": "remoteControlIntegration",
            "label": "איחוד שלטים",
            "controlType": "toggle",
            "required": false,
            "order": 9,
            "disabled": false
        },
        {
            "key": "leechSN",
            "label": "קוד סריאלי - עלוקה",
            "controlType": "text-box",
            "value": "leechSN",
            "required": false,
            "order": 10,
            "disabled": false
        },
        {
            "key": "leechLearningCode",
            "label": "קוד לימוד עלוקה",
            "controlType": "text-box",
            "value": "leechLearningCode",
            "required": false,
            "order": 11,
            "disabled": false
        },
        {
            "key": "lecchLocation",
            "label": "מיקום עלוקה ",
            "controlType": "drop-down",
            "lookupName": "protectionsystemversionid",
            "required": false,
            "order": 12,
            "disabled": false
        },
        {
            "key": "signature",
            "label": "חתימת לקוח",
            "controlType": "signature",
            "icon": "arrow-dropdown",
            "showDetails": false,
            "required": true,
            "order": 13
        },
        {
            "key": "save",
            "label": "שמירה",
            "labelA": "קוד תקשורת",
            "controlType": "engineeringtest",
            "required": false,
            "order": 14,
            "disabled": false,
            "onClick": "sendData",
            "onClickA": "openUrl",
            "class": "col-6",
            "color": "dark",
            "colorA": "danger"
        }
    ],
    "installation": [
        {
            "key": "actualinventoryProductId",
            "label": "מוצר מלאי בפועל/סוג התקנה",
            "controlType": "drop-down",
            "lookupName": "product",
            "required": true,
            "order": 1,
            "disabled": false
        },
        {
            "key": "originalInstallationId",
            "label": "קישור להתקנת מקור",
            "controlType": "drop-down",
            "lookupName": "serviceproductinventoryproduct",
            "required": true,
            "order": 2,
            "disabled": false
        },
        {
            "key": "installatorlRemarks",
            "label": "הערות מתקין",
            "controlType": "textarea",
            "required": true,
            "order": 3,
            "rows": 6,
            "disabled": false
        },
        {
            "key": "reportStatus",
            "label": "סטטוס דיווח ",
            "controlType": "drop-down",
            "lookupName": "reportstatus",
            "required": true,
            "order": 4,
            "disabled": false
        },
        {
            "key": "signature",
            "label": "חתימת לקוח",
            "controlType": "signature",
            "icon": "arrow-dropdown",
            "showDetails": false,
            "required": true,
            "order": 5
        },
        {
            "key": "save",
            "label": "שמירה",
            "labelA": "קוד תקשורת",
            "controlType": "engineeringtest",
            "required": false,
            "order": 6,
            "disabled": false,
            "onClick": "sendData",
            "onClickA": "openUrl",
            "class": "col-6",
            "color": "dark",
            "colorA": "danger"
        }
    ],
    "removeTransmitter": [
        {
            "key": "installatorlRemarks",
            "label": "הערות מתקין",
            "controlType": "textarea",
            "required": true,
            "order": 1,
            "rows": 6,
            "disabled": false
        },
        {
            "key": "signature",
            "label": "חתימת לקוח",
            "controlType": "signature",
            "icon": "arrow-dropdown",
            "showDetails": false,
            "required": true,
            "order": 2
        },
        {
            "key": "save",
            "label": "שמירה",
            "labelA": "קוד תקשורת",
            "controlType": "engineeringtest",
            "required": false,
            "order": 3,
            "disabled": false,
            "onClick": "sendData",
            "onClickA": "openUrl",
            "class": "col-6",
            "color": "dark",
            "colorA": "danger"
        }
    ]
};
            let demoWorkOrder = [
    {
        "id": "9be9234a-35f4-e611-80d4-00155dcce607",
        "timeStart": "2017-02-19T11:45:00Z",
        "timeEnd": "2017-02-19T11:45:00Z",
        "customerName": " pointercept ",
        "customerContact": "",
        "assetid": "74500970",
        "city": "",
        "status": "117440000",
        "appStatus": "2",
        "ticketDetails": [
            {
                "id": "d9634bad-3937-e711-80d8-00155dcce607",
                "ticketIssue": "test product",
                "ticketDesc": "Test",
                "status": null,
                "type": "3",
                "transmitterType": "",
                "originalInstallationId": "00000000-0000-0000-0000-000000000000",
                "shiftedTransmitter": false,
                "transmitterRemovalRequired": false,
                "switchTransmitter": false,
                "remarks": "בדיקה",
                "actualinventoryProductId": "28442cf4-d41a-e711-80d6-00155dcce607",
                "connectioncode": "",
                "firstCutoffId": "00000000-0000-0000-0000-000000000000",
                "cutoff": "",
                "neutralizationMethod": null,
                "neutralizationCode": "",
                "installerRemarks": "",
                "reportStatus": "4",
                "installedSerialProductId": "00000000-0000-0000-0000-000000000000",
                "removedSerialProductId": "00000000-0000-0000-0000-000000000000",
                "cutoffConnection": false,
                "towingDetector": false,
                "detectionSystemLocation": null,
                "protectionSystemVersionId": "00000000-0000-0000-0000-000000000000",
                "protectionSystemSN": "",
                "protectionSystemBatchNumber": "",
                "remoteControllIntegration": false,
                "leechSN": "",
                "leechLearningCode": "",
                "leechLocation": null,
                "pointerWareKey": -1,
                "accountId": "6c3fc5d9-bf33-e711-80d7-00155dcce607",
                "assetId": "3035d922-a934-e711-80d7-00155dcce607",
                "statusIR": "3",
                "svRservice": false,
                "formType": "1"
            },
            {
                "id": "8d04d016-bc6b-e711-80dc-00155dcce607",
                "ticketIssue": "פעילה + דמי מנוי",
                "ticketDesc": "\u200eפעילה + דמי מנוי- \u200e123",
                "status": null,
                "type": "1",
                "transmitterType": "",
                "originalInstallationId": "00000000-0000-0000-0000-000000000000",
                "shiftedTransmitter": false,
                "transmitterRemovalRequired": false,
                "switchTransmitter": false,
                "remarks": "",
                "actualinventoryProductId": "4a82a792-a948-e711-80d9-00155dcce607",
                "connectioncode": "",
                "firstCutoffId": "00000000-0000-0000-0000-000000000000",
                "cutoff": "",
                "neutralizationMethod": null,
                "neutralizationCode": "",
                "installerRemarks": "",
                "reportStatus": "3",
                "installedSerialProductId": "00000000-0000-0000-0000-000000000000",
                "removedSerialProductId": "00000000-0000-0000-0000-000000000000",
                "cutoffConnection": false,
                "towingDetector": false,
                "detectionSystemLocation": null,
                "protectionSystemVersionId": "00000000-0000-0000-0000-000000000000",
                "protectionSystemSN": "",
                "protectionSystemBatchNumber": "",
                "remoteControllIntegration": false,
                "leechSN": "",
                "leechLearningCode": "",
                "leechLocation": null,
                "pointerWareKey": -1,
                "accountId": "6baf022a-e166-e711-80db-00155dcce607",
                "assetId": "00000000-0000-0000-0000-000000000000",
                "statusIR": "2",
                "svRservice": true,
                "formType": "1"
            },
            {
                "id": "90dadb2f-c56b-e711-80dc-00155dcce607",
                "ticketIssue": "456",
                "ticketDesc": "\u200eגלאי רוורס- \u200eBundle",
                "status": null,
                "type": "1",
                "transmitterType": "",
                "originalInstallationId": "00000000-0000-0000-0000-000000000000",
                "shiftedTransmitter": false,
                "transmitterRemovalRequired": false,
                "switchTransmitter": false,
                "remarks": "",
                "actualinventoryProductId": "7911f62d-fb64-e711-80db-00155dcce607",
                "connectioncode": "",
                "firstCutoffId": "00000000-0000-0000-0000-000000000000",
                "cutoff": "",
                "neutralizationMethod": null,
                "neutralizationCode": "",
                "installerRemarks": "aaa",
                "reportStatus": "1",
                "installedSerialProductId": "00000000-0000-0000-0000-000000000000",
                "removedSerialProductId": "00000000-0000-0000-0000-000000000000",
                "cutoffConnection": false,
                "towingDetector": false,
                "detectionSystemLocation": "1",
                "protectionSystemVersionId": "e6e49383-0333-e711-80d7-00155dcce607",
                "protectionSystemSN": "",
                "protectionSystemBatchNumber": "",
                "remoteControllIntegration": false,
                "leechSN": "",
                "leechLearningCode": "",
                "leechLocation": null,
                "pointerWareKey": -1,
                "accountId": "6baf022a-e166-e711-80db-00155dcce607",
                "assetId": "de9ef672-e666-e711-80db-00155dcce607",
                "statusIR": "3",
                "svRservice": false,
                "formType": "7"
            }
        ]
    },
    {
        "id": "f7dca74d-456d-e711-80de-00155dcce607",
        "timeStart": "2017-07-21T08:15:00Z",
        "timeEnd": "2017-07-21T13:15:00Z",
        "customerName": "ירון לוינסקי ",
        "customerContact": "",
        "assetid": "111-222",
        "city": "",
        "status": "117440000",
        "appStatus": "2",
        "ticketDetails": [
            {
                "id": "c26d9046-426d-e711-80de-00155dcce607",
                "ticketIssue": "גלאי רוורס",
                "ticketDesc": "\u200eגלאי רוורס- \u200eBundle",
                "status": null,
                "type": "1",
                "transmitterType": "",
                "originalInstallationId": "00000000-0000-0000-0000-000000000000",
                "shiftedTransmitter": false,
                "transmitterRemovalRequired": false,
                "switchTransmitter": false,
                "remarks": "",
                "actualinventoryProductId": "7911f62d-fb64-e711-80db-00155dcce607",
                "connectioncode": "",
                "firstCutoffId": "00000000-0000-0000-0000-000000000000",
                "cutoff": "",
                "neutralizationMethod": null,
                "neutralizationCode": "",
                "installerRemarks": "",
                "reportStatus": "4",
                "installedSerialProductId": "00000000-0000-0000-0000-000000000000",
                "removedSerialProductId": "00000000-0000-0000-0000-000000000000",
                "cutoffConnection": false,
                "towingDetector": false,
                "detectionSystemLocation": null,
                "protectionSystemVersionId": "00000000-0000-0000-0000-000000000000",
                "protectionSystemSN": "",
                "protectionSystemBatchNumber": "",
                "remoteControllIntegration": false,
                "leechSN": "",
                "leechLearningCode": "",
                "leechLocation": null,
                "pointerWareKey": -1,
                "accountId": "124f40c6-df64-e711-80db-00155dcce607",
                "assetId": "29d4efbb-e564-e711-80db-00155dcce607",
                "statusIR": "3",
                "svRservice": false,
                "formType": ""
            }
        ]
    },
    {
        "id": "334b592b-286e-e711-80de-00155dcce607",
        "timeStart": "2017-07-21T15:30:00Z",
        "timeEnd": "2017-07-21T18:30:00Z",
        "customerName": "ירון לוינסקי ",
        "customerContact": "",
        "assetid": "111-222",
        "city": "תל אביב-יפו",
        "status": "117440000",
        "appStatus": null,
        "ticketDetails": [
            {
                "id": "772e8ec8-876d-e711-80de-00155dcce607",
                "ticketIssue": "התקנת  מערכת איתור פעילה",
                "ticketDesc": "התקנת  מערכת איתור פעילה - big bundle  ",
                "status": null,
                "type": "1",
                "transmitterType": "",
                "originalInstallationId": "00000000-0000-0000-0000-000000000000",
                "shiftedTransmitter": false,
                "transmitterRemovalRequired": false,
                "switchTransmitter": false,
                "remarks": "",
                "actualinventoryProductId": "1ee66f2e-3a6d-e711-80de-00155dcce607",
                "connectioncode": "",
                "firstCutoffId": "00000000-0000-0000-0000-000000000000",
                "cutoff": "",
                "neutralizationMethod": null,
                "neutralizationCode": "",
                "installerRemarks": "",
                "reportStatus": "4",
                "installedSerialProductId": "00000000-0000-0000-0000-000000000000",
                "removedSerialProductId": "00000000-0000-0000-0000-000000000000",
                "cutoffConnection": false,
                "towingDetector": false,
                "detectionSystemLocation": null,
                "protectionSystemVersionId": "00000000-0000-0000-0000-000000000000",
                "protectionSystemSN": "",
                "protectionSystemBatchNumber": "",
                "remoteControllIntegration": false,
                "leechSN": "",
                "leechLearningCode": "",
                "leechLocation": null,
                "pointerWareKey": -1,
                "accountId": "124f40c6-df64-e711-80db-00155dcce607",
                "assetId": "29d4efbb-e564-e711-80db-00155dcce607",
                "statusIR": "3",
                "svRservice": false,
                "formType": ""
            }
        ]
    },
    {
        "id": "d47532e2-0d6e-e711-80de-00155dcce607",
        "timeStart": "2017-07-27T05:00:00Z",
        "timeEnd": "2017-07-27T10:30:00Z",
        "customerName": "ירון לוינסקי ",
        "customerContact": "",
        "assetid": "111-222",
        "city": "",
        "status": "117440000",
        "appStatus": "2",
        "ticketDetails": [
            {
                "id": "80490a4a-896d-e711-80de-00155dcce607",
                "ticketIssue": "הוספת עלוקה",
                "ticketDesc": "\u200eהוספת עלוקה- \u200eהוספת עלוקה",
                "status": null,
                "type": "1",
                "transmitterType": "",
                "originalInstallationId": "00000000-0000-0000-0000-000000000000",
                "shiftedTransmitter": false,
                "transmitterRemovalRequired": false,
                "switchTransmitter": false,
                "remarks": "",
                "actualinventoryProductId": "bad9e564-9359-e711-80db-00155dcce607",
                "connectioncode": "",
                "firstCutoffId": "00000000-0000-0000-0000-000000000000",
                "cutoff": "",
                "neutralizationMethod": null,
                "neutralizationCode": "",
                "installerRemarks": "",
                "reportStatus": "4",
                "installedSerialProductId": "00000000-0000-0000-0000-000000000000",
                "removedSerialProductId": "00000000-0000-0000-0000-000000000000",
                "cutoffConnection": false,
                "towingDetector": false,
                "detectionSystemLocation": null,
                "protectionSystemVersionId": "00000000-0000-0000-0000-000000000000",
                "protectionSystemSN": "",
                "protectionSystemBatchNumber": "",
                "remoteControllIntegration": false,
                "leechSN": "",
                "leechLearningCode": "",
                "leechLocation": null,
                "pointerWareKey": -1,
                "accountId": "124f40c6-df64-e711-80db-00155dcce607",
                "assetId": "29d4efbb-e564-e711-80db-00155dcce607",
                "statusIR": "3",
                "svRservice": true,
                "formType": "2"
            }
        ]
    }
];
       
            this.workOrdersDemo = demoWorkOrder;
    }
  
}