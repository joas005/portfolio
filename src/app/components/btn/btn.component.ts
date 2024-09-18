import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
})
export class BtnComponent {
  @Input()
  btnText: string = '';
  @Input()
  btnLink: string = '';
  @Input()
  btnTarget: string = '';
  @Input()
  btnType: string = '';

  getButtonClass(): string {
    return this.btnType === 'linkedin' ? 'btn-linkedin' : 'btn-default';
  }
}
