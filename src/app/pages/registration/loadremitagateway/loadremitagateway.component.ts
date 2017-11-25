import { LoadRemitaGatewayService } from './loadremitagateway.service';
import { Component, Inject, OnInit, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ngx-load-remita-gateway',
    templateUrl: './loadremitagateway.component.html',
    providers: [LoadRemitaGatewayService],
})
export class LoadRemitaGatewayComponent implements OnInit {

    data: any = {};
    remitapaytransid: number;
     showremitadetail: boolean = false;
 @ViewChild('savebutton') savebutton: ElementRef;
      @ViewChild('remitaform') remitaform: ElementRef;
    constructor(private service: LoadRemitaGatewayService, private route: ActivatedRoute,
        private router: Router, private renderer: Renderer) {

    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.remitapaytransid = +params['id']; // (+) converts string 'id' to a number
            this.service.getRemitaPaymentTransactionDetails(this.remitapaytransid).subscribe(result => {
                this.data = result;
                this.showremitadetail = true;
              // this.remitaform.nativeElement.submit();
              //  this.savebutton.nativeElement.click();
                //  const el: HTMLElement = this.savebutton.nativeElement as HTMLElement;
                //  el.click();
                // const event = new MouseEvent('click', { bubbles: true });
                // this.renderer.invokeElementMethod(this.savebutton.nativeElement, 'dispatchEvent', [event]);
            });
        });
    }

}
