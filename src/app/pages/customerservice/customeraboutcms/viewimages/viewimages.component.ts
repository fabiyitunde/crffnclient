import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { from } from "rxjs/observable/from";
import { ViewimagesService } from "./viewimages.service";
@Component({
  selector: "viewimages",
  templateUrl: "./viewimages.component.html",
  styleUrls: ["./viewimages.component.scss"],
  providers: [ViewimagesService]
})
export class ViewimagesComponent implements OnInit {
  crffnmasterid: number;
  data: any = {};
  aboutuslist: any[] = [];
  p: number = 1;
  constructor(
    private service: ViewimagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const forwarderID = +params["id"];

      this.crffnmasterid = forwarderID;
    });
    this.getstafflist();
  }
  getstafflist() {
    this.service.getAboutUsList(this.crffnmasterid).subscribe(result => {
      let list = result;

      this.aboutuslist = list.filter(
        item => item.aboutusitemtype === "Picture"
      );
    });
  }

  deleteAboutUsItem(aboutusitemid) {
    if (window.confirm("Are you sure you want to delete?")) {
      this.service
        .deleteAboutUsItem({ aboutusitemid: aboutusitemid })
        .subscribe(
          result => {},
          err => {
            alert(err);
            this.getstafflist();
          }
        );
    }
  }
}
