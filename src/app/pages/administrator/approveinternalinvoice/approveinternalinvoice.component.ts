import { ApproveInternalInvoiceService } from "./approveinternalinvoice.service";
import {
  Component,
  Inject,
  OnInit,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

import {
  ActivatedRoute,
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgUploaderOptions, UploadedFile, UploadRejected } from "ngx-uploader";

@Component({
  selector: "approveinternalinvoice",
  templateUrl: "./approveinternalinvoice.component.html",
  styleUrls: ["./approveinternalinvoice.component.scss"],
  providers: [ApproveInternalInvoiceService]
})
export class ApproveinternalinvoiceComponent implements OnInit {
  invoicelist: any[] = [];
  p: number = 1;
  constructor(
    private service: ApproveInternalInvoiceService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getPendingInvoiceList();
  }

  getPendingInvoiceList() {
    this.service.getPendingInvoiceList().subscribe(result => {
      this.invoicelist = result;
    });
  }

  approveInvoice(invoiceid) {
    if (window.confirm("Are you sure you want to approve?")) {
      this.service.approveInvoice({ invoicemasterid: invoiceid }).subscribe(
        result => {
          this.getPendingInvoiceList();
        },
        err => {
          alert(err);
        }
      );
    }
  }

  viewInvoice(invoiceheader) {
    console.log(invoiceheader);

    this.router.navigate(["pages/administrator/invoicedetail", invoiceheader]);
  }

  returnInvoice(invoiceid) {
    if (window.confirm("Are you sure you want to return invoice?")) {
      this.service.returnInvoice({ invoicemasterid: invoiceid }).subscribe(
        result => {
          this.getPendingInvoiceList();
        },

        err => {
          alert(err);
        }
      );
    }
  }
}
