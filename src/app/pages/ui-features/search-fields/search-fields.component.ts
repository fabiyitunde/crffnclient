import { Component } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
import { subscribeOn } from 'rxjs/operator/subscribeOn';

@Component({
    selector: 'ngx-search-fields',
    templateUrl: 'search-fields.component.html',
})
export class SearchComponent {
    constructor(private ser: NbSearchService) {
        ser.onSearchSubmit().subscribe(term => {
            alert(term.term);
        })
    }
}
