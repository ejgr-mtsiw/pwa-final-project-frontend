import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {

  @Input()
  title: string = '';

  @Input()
  content: string = '';

  @Input()
  cancelButtonText: string = 'Cancelar';

  @Input()
  okButtonText: string = 'Ok';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
