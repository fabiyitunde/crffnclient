import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-customer-dashboard',
  templateUrl: './customerdashboard.component.html',
})
export class CustomerDashboardComponent implements OnInit {
  crffnmasterid: number;
  showcustomerinfo: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.crffnmasterid = +params['id']; // (+) converts string 'id' to a number
      this.showcustomerinfo = true;
    });
  }
  createnewinvoice() {
     this.router.navigate(['/pages/customerservice/invoiceconsole'], { queryParams: { opn: 'ADD', id: this.crffnmasterid } });

  }
}
