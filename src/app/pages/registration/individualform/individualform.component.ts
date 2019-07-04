import { Component, Inject, OnInit, Input } from "@angular/core";
import { IndividualFormService } from "./individualform.service";
import { MembershipType } from "../registration.model";
import { Router } from "@angular/router";
@Component({
  selector: "ngx-individual-form",
  styleUrls: ["./individualform.component.scss"],
  templateUrl: "./individualform.component.html",
  providers: [IndividualFormService]
})
export class IndividualFormComponent implements OnInit {
  data: any = {};
  statelist: any[] = [];
  lgalist: any[] = [];
  titlelist: any[] = [];
  idtypelist: any[] = [];
  @Input() membershiptypeid: MembershipType;
  constructor(private service: IndividualFormService, private router: Router) {}
  ngOnInit() {
    this.service.getStateList().subscribe(result => {
      this.statelist = [];
      this.statelist = result;
    });
    this.service.getTitleList().subscribe(result => {
      this.titlelist = [];
      this.titlelist = result;
    });
    this.service.getIDTypeList().subscribe(result => {
      this.idtypelist = [];
      this.idtypelist = result;
    });
  }
  onStateSelect(stateid) {
    this.service.getLGAList(stateid).subscribe(result => {
      this.lgalist = [];
      this.lgalist = result;
    });
  }
  register() {
    this.data.FreightForwaderCategory = this.membershiptypeid;
    this.service.createindividualmember(this.data).subscribe(
      result => {
        alert("Record Saved SuccessFully");
      },
      error => {
        alert(error);
      }
    );
    // this.router.navigate(["pages/registration/qualification"]);
  }
}
