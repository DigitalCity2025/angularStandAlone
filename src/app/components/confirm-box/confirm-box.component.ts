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

  cancel() {
    this.onResponse.emit(false);
  }

  confirm() {
    this.onResponse.emit(true);
  }
}
