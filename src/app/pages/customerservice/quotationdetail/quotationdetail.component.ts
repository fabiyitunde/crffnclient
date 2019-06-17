import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { QuotationDetailService } from './quotationdetail.service';

@Component({
  selector: 'quotationdetail',
  templateUrl: './quotationdetail.component.html',
  styleUrls: ['./quotationdetail.component.scss'],
  providers: [QuotationDetailService]
})
export class QuotationdetailComponent implements OnInit {
  data: any = {};
  p: number = 1;
  pofchargelist: any[] = [];
  transactionlist: any[] = [];
  transportlist: any[] = [];
  quotationlist: any[] = [];
  transporttypeid: number;
  showlandingpage: boolean = false;
  showquotationdetail: boolean = true;
  isDisabled: boolean = true;


  @Input() quotationmasterid: number;
  constructor(private service: QuotationDetailService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.service.getPOFTransactionTypeList().subscribe(result => {

      this.transactionlist = result;
    });
    this.service.getFreightTransportTypeList().subscribe(result => {

      this.transportlist = result;
    });

  }
  onSelect(id) {
    this.transporttypeid = id;
    console.log(id);
    this.ref.detectChanges();

    this.service.getPOFChargeList(this.transporttypeid).subscribe(result => {

      this.pofchargelist = result;
    });
  }

  submitItem() {
    alert('Quotation successfully created');
    this.showquotationdetail = false;
    this.showlandingpage = true;

  }

  createQuotationDetail() {


    this.data.quotationmasterid = this.quotationmasterid;

    this.service.createQuotationDetail(this.data).subscribe(result => {
      alert('Quotation item added successfully');

      this.data.quantity = "";
      this.data.freighttransporttypeid = "";
      this.data.poftransactiontypeid = "";
      this.data.poftransactiontypeid = "";
      this.data.pofchargeid = "";

      this.getQuotationItemlist();
      this.isDisabled = false;

    },
      error => {
        alert(error);
      });
  }
  getQuotationItemlist() {

    this.service.getquotationmasterdetail(this.quotationmasterid).subscribe(result => {


      this.quotationlist = result.lineitems;
      console.log(result);
    });
  }

}
