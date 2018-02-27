import { Injectable   , OnDestroy} from '@angular/core';
import { Network } from '@ionic-native/network';
import  {Logger} from '../logger.service/logger.service';
import { Subscription} from 'rxjs/Subscription';

@Injectable()
export class NetworkService  implements OnDestroy {

isOnline : boolean;
connected: Subscription;
disconnected: Subscription;


 constructor(private network: Network , private logger : Logger){
     this.initChangeConnectionEvent();
 }

  getNetworkType() { 
    return this.network.type;
  }


  onConnect() { 
     return this.network.onConnect();
  }

  onDisconnect() {
      return this.network.onDisconnect();
  }

  initChangeConnectionEvent() { 
     this.connected =  this.onConnect().subscribe(res=>{
          this.isOnline = true;
          this.logger.debug("online status" , this.isOnline);
      },(err)=> {
         this.logger.error("error on subscriber into connect() method [NetworkService]");
      });

      this.disconnected = this.onDisconnect().subscribe(res=>{
           this.isOnline = true;
           this.logger.debug("online status" , this.isOnline);
      } ,(err)=>{
           this.logger.error("error on subscriber into disconnect() method [NetworkService]");
      });
  }


   ngOnDestroy() {
       this.connected.unsubscribe();
       this.disconnected.unsubscribe();
   }


}