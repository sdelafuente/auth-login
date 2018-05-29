import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deal } from '../deal';
// We haven't defined these services yet
import { AuthService } from '../servicios/auth.service';
import { DealService } from '../servicios/deal.service';

@Component({
  selector: 'app-private-deals',
  templateUrl: './private-deals.component.html',
  styleUrls: ['./private-deals.component.css']
})
export class PrivateDealsComponent implements OnInit {

    dealsSub: Subscription;
    privateDeals: Deal[];
    error: any;

  constructor(
      public dealService: DealService
//      public authService: AuthService
  ) { }

  ngOnInit() {
      this.dealsSub = this.dealService
        .getPrivateDeals()
        .subscribe(
          deals => this.privateDeals = deals,
          err => this.error = err
        );
    }

      ngOnDestroy() {
        this.dealsSub.unsubscribe();
      }

}
