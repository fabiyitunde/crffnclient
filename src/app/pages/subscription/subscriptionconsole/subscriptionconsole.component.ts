import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-subscription-console',
    templateUrl: './subscriptionconsole.component.html',
})
export class SubscriptionConsoleComponent implements OnInit {
    crffnmasterid: number;
    subscriptionmasterid: number;
    steptoshow: number = 0;
    constructor(private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const opn = params['opn'];
            const id = +params['id'];
            if (opn === 'ADD') {
                this.crffnmasterid = id;
                this.steptoshow = 1;
            } else {
                this.subscriptionmasterid = id;
                this.steptoshow = 2;
            }
        });
    }
    onNewSubscriptionCreated(arg) {
        this.subscriptionmasterid = arg;
        this.steptoshow = 2;
    }
    onFinishedEditing(arg) {
        this.router.navigate(['pages/subscription/subscriptionhome']);
    }
    close() {
              this.router.navigate(['pages/pof/pofhome']);
    }
}
