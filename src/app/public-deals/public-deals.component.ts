import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deal } from '../deal';

// We haven't defined these services yet
//import { AuthService } from '../auth.service';
import { DealService } from '../servicios/deal.service';

@Component({
  selector: 'app-public-deals',
  templateUrl: './public-deals.component.html',
  styleUrls: ['./public-deals.component.css']
})
export class PublicDealsComponent implements OnInit, OnDestroy {

    dealsSub: Subscription;
    publicDeals: Array<Deal>;
    error: any;

    constructor(
        public dealService: DealService
        //public authService: AuthService
    ) { }

    ngOnInit() {
        this.dealsSub = this.dealService
          .getPublicDeals()
          .subscribe(
            deals => this.publicDeals = deals,
            err => this.error = err
          );
    }

    ngOnDestroy(){
        this.dealsSub.unsubscribe();
    }

}
