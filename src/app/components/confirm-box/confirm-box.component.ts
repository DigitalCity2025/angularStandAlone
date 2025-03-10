import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-box',
  imports: [],
  templateUrl: './confirm-box.component.html',
  styleUrl: './confirm-box.component.scss'
})
export class ConfirmBoxComponent {
  // @Input()
  // message!: string;
  message = input.required<string>()

  // @Output()
  // onResponse: EventEmitter<boolean> = new EventEmitter();
  onResponse = output<boolean>();

  visible = input.required<boolean>();
  visibleChange = output<boolean>();

  cancel() {
    this.visibleChange.emit(false);
    this.onResponse.emit(false);
  }

  confirm() {
    this.visibleChange.emit(false);
    this.onResponse.emit(true);
  }
}
