import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { MembershipType } from '../registration.model';
@Component({
    selector: 'ngx-start-registration',
    templateUrl: './startregistration.component.html',
})
export class StartRegistrationComponent implements OnInit {
    membertypeid = 0;
    membertypelist = [];
    membershiptype: MembershipType;
    constructor(private service: RegistrationService, private zone: NgZone, private ref: ChangeDetectorRef) {

    }
    ngOnInit() {
        this.service.getMembershipTypeList().subscribe(result => {
            this.zone.run(() => {
                this.membertypelist = result;
                this.ref.detectChanges();
            });

        });
    }
    onSelect(id) {
        this.membertypeid = id;
        this.ref.detectChanges();
    }
}
