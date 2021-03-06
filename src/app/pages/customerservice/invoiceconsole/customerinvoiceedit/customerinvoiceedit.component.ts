import { InvoiceLineItemTypeDisplayComponent } from "./invoicelineitemtypedisplay.component";
import { CustomerInvoiceEditService } from "./customerinvoiceedit.service";
import { Subscription } from "rxjs/Subscription";

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "ngx-customer-invoice-edit",
  templateUrl: "./customerinvoiceedit.component.html",
  styles: [
    `
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `
  ],
  providers: [CustomerInvoiceEditService]
})
export class CustomerInvoiceEditComponent implements OnInit {
  settings = {};
  crffnmasterid: number;
  showtable: boolean = false;
  iseditable: boolean = true;
  showcancel: boolean = false;
  header: any = {};
  remarks: string = "Invoice has been cancelled";
  @Input() invoicemasterid: number;

  source: LocalDataSource = new LocalDataSource();
  @Output() onFinishedEditingInvoice: EventEmitter<any> = new EventEmitter();

  constructor(
    private service: CustomerInvoiceEditService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // const data = this.service.getData();
  }
  ngOnInit() {
    this.service.loadLineItemTypeList();
    this.service.lineitemtypedata$.subscribe(cacheddata => {
      this.settableSettings(cacheddata);
      this.loadTableData();
    });
    this.route.params.subscribe(params => {
      this.crffnmasterid = +params["id"]; // (+) converts string 'id' to a number
    });
  }
  loadTableData() {
    this.service.getInvoiceDetails(this.invoicemasterid).subscribe(data => {
      this.header = data.header;
      if (data.header.status !== "Pending") this.iseditable = false;
      this.source.load(data.lineitems);
      this.showtable = true;
      this.showcancel = true;
    });
  }
  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      this.service.deleteInvoiceLineItem(event.data).subscribe(
        res => {
          event.confirm.resolve();
          this.loadTableData();
        },
        err => {
          alert(err);
          event.confirm.reject();
        }
      );
    } else {
      event.confirm.reject();
    }
  }
  onCreateConfirm(event): void {
    event.newData.id = 0;
    event.newData.invoicemasterid = this.invoicemasterid;
    this.service.addInvoiceLineItem(event.newData).subscribe(
      res => {
        event.confirm.resolve(event.newData);
        this.loadTableData();
      },
      err => {
        alert(err);
        event.confirm.reject();
      }
    );
  }
  deleteinvoice() {
    if (window.confirm("Are you sure you want to delete?")) {
      this.service
        .deleteInvoice({ invoicemasterid: this.invoicemasterid })
        .subscribe(
          result => {
            this.onFinishedEditingInvoice.emit(this.header);
          },
          err => {
            alert(err);
          }
        );
    }
  }

  cancelinvoice() {
    if (window.confirm("Are you sure you want to cancel?")) {
      this.service
        .cancelInvoice({
          invoicemasterid: this.invoicemasterid,
          remarks: this.remarks
        })
        .subscribe(
          result => {
            this.onFinishedEditingInvoice.emit(this.header);
          },
          err => {
            alert(err);
          }
        );
    }
  }
  submitinvoice() {
    if (window.confirm("Are you sure you want to Submit?")) {
      this.service
        .submitInvoice({ invoicemasterid: this.invoicemasterid })
        .subscribe(
          result => {
            this.onFinishedEditingInvoice.emit(this.header);
          },
          err => {
            alert(err);
            this.router.navigate(["pages/home"]);
          }
        );
    }
  }
  settableSettings(invoicelineitemtypelist) {
    this.settings = {
      actions: {
        add: true,
        edit: false,
        delete: true
      },
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmCreate: true
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmSave: true
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true
      },
      columns: {
        id: {
          title: "ID",
          type: "number",
          editable: false
        },
        lineitemType: {
          title: "Line Item Type",
          type: "custom",
          renderComponent: InvoiceLineItemTypeDisplayComponent,
          editor: {
            type: "list",
            config: {
              list: invoicelineitemtypelist
            }
          }
        },
        unitamount: {
          title: "Unit Amount",
          type: "number"
        },
        quantity: {
          title: "Quantity",
          type: "number"
        },
        amount: {
          title: "Amount",
          type: "string",
          editable: false
        },
        narration: {
          title: "Narration",
          type: "string"
        }
      }
    };
  }
}
