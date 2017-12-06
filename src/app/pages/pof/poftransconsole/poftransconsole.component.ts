import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-pof-trans-console',
    templateUrl: './poftransconsole.component.html',
})
export class POFTransConsoleComponent implements OnInit {
    crffnmasterid: number;
    poftransactionmasterid: number;
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
                this.poftransactionmasterid = id;
                this.steptoshow = 2;
            }
        });
    }
    onNewPOFTransactionCreated(arg) {
        this.poftransactionmasterid = arg;
        this.steptoshow = 2;
    }
    onFinishedEditing(arg) {
        this.router.navigate(['pages/pof/pofhome']);
    }
    close() {
              this.router.navigate(['pages/pof/pofhome']);
    }
}
