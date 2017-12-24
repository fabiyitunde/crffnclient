import { CorporateFormService } from './corporateform.service';
import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MembershipType } from '../registration.model';
@Component({
    selector: 'ngx-corporate-form',   
    templateUrl: './corporateform.component.html',
    providers: [CorporateFormService],
})
export class CorporateFormComponent implements OnInit {

    data: any = {};
    statelist: any[] = [];
    @Input() membershiptypeid: MembershipType;
    @Output() onRecordSavedSuccessfully: EventEmitter<any> = new EventEmitter();
    constructor(private service: CorporateFormService) {

    }
    ngOnInit() {
        this.service.getStateList().subscribe(result => {
            this.statelist = [];
            this.statelist = result;
        });
        this.service.getCorporateCRFFNRegistrationData().subscribe(result => {
            this.data = result;
        })
    }

    register() {

        if (this.data.crffnmasterid) {
            this.service.updateCorporateRegistrationRecord(this.data).subscribe(result => {
                alert('Record Saved SuccessFully');
                this.onRecordSavedSuccessfully.emit(this.data.crffnmasterid);
            },
                error => {
                    alert(error);
                });
        } else {
            this.data.freightForwaderCategory = this.membershiptypeid;
            this.service.createCorporateRegistrationRecord(this.data).subscribe(result => {
                alert('Record Saved SuccessFully');
                this.onRecordSavedSuccessfully.emit(result);
            },
                error => {
                    alert(error);
                });
        };

    }
}
