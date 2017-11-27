import { Router } from '@angular/router';
import { ModalComponent } from './../../ui-features/modals/modal/modal.component';
import { DataModule } from './../../../@core/data/data.module';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { IndividualFormService } from '../individualform/individualform.service';
import { MembershipType } from '../registration.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngx-manage-individual-form',
  styleUrls: ['./manageindividualform.component.scss'],
  templateUrl: './manageindividualform.component.html',
  providers: [IndividualFormService],
})
export class ManageIndividualFormComponent implements OnInit {

  data: any = {};
  statelist: any[] = [];
  lgalist: any[] = [];
  titlelist: any[] = [];
  idtypelist: any[] = [];
  isNotSubmitted: boolean = false;
  constructor(private service: IndividualFormService, private modalService: NgbModal, private router: Router) {

  }
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
    this.service.getIndividualMemberCRFFNRegistrationInfo().subscribe(result => {
      this.service.getLGAList(result.stateid).subscribe(lgaresult => {
        this.lgalist = [];
        this.lgalist = lgaresult;
      });
      this.data = result;
    });
  }
  onStateSelect(stateid) {
    this.service.getLGAList(stateid).subscribe(result => {
      this.lgalist = [];
      this.lgalist = result;
    });
  }
  updateindividualmember() {

    this.service.updateindividualmember(this.data).subscribe(result => {
      this.showStaticModal('Success', result);
    },
      error => {
        alert(error);
      });
  }
 
  showStaticModal(header: string, content: string) {
    const activeModal = this.modalService.open(ModalComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.modalHeader = header;
    activeModal.componentInstance.modalContent = content;
  }
}
