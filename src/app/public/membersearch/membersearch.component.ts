import { NbSearchService } from '@nebular/theme';
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { MemberSearchService } from './membersearch.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';


@Component({
    selector: 'member-search',
    templateUrl: './membersearch.component.html',
    styleUrls: ['./membersearch.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [MemberSearchService]
})
export class MemberSearchComponent implements OnInit {

    resultlist: Observable<any[]>;
    p: number = 1;
    isDisabled: boolean = false;
    total: number;
    spinner: boolean;
    loading: boolean;
    data: any = {};
    membershipcategorylist: any[] = [];
    statelist: any[] = [];
    constructor(private ngsearchservice: NbSearchService, private router: Router,
        private membersearchservice: MemberSearchService) {
        // ngsearchservice.onSearchSubmit().subscribe(term => {
        //     alert(term.term);
        // })
        console.log("Loaded");
    }
    ngOnInit() {
        this.membersearchservice.getMembershipTypeList().subscribe(result => {
            this.membershipcategorylist = result;
        });
        this.membersearchservice.getStateList().subscribe(result => {
            this.statelist = result;
        });
    }
    getPage(page: number) {
        console.log(page, );
        this.loading = true;
        this.data.page = page;
        this.resultlist = this.membersearchservice.searchmembers(this.data)
            .do(res => {
                this.total = res.total;
                this.p = page;
                this.loading = false;
                this.isDisabled = false;
                this.spinner = false;
            })
            .map(res => res.items);


    }
    search() {
        this.spinner = true;
        this.isDisabled = true;

        this.getPage(1);

    }
    opendetails(item: any) {
        this.router.navigate(['public/memberdetails', item.id]);
    }
}
