import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerStaffCmsService } from '../customerstaffcms.service';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'ngx-modals',
  styleUrls: ['./modals.component.scss'],
  templateUrl: './modals.component.html',
  providers: [CustomerStaffCmsService],
})
export class ModalsComponent {

  constructor(private modalService: NgbModal) { }

  showLargeModal() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }


  showStaticModal() {
    const activeModal = this.modalService.open(ModalComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.modalHeader = 'Static modal';
    activeModal.componentInstance.modalContent = `This is static modal, backdrop click
                                                    will not close it. Click × or confirmation button to close modal.`;
  }

}
