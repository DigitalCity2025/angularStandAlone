import { Component } from '@angular/core';
import { TimePipe } from "../../pipes/time.pipe";
import { ConfirmBoxComponent } from "../confirm-box/confirm-box.component";

@Component({
  selector: 'app-chrono',
  imports: [TimePipe, ConfirmBoxComponent],
  templateUrl: './chrono.component.html',
  styleUrl: './chrono.component.scss'
})
export class ChronoComponent {

  ms: number = 0;
  idInterval: number|null = null;
  showConfirmBox: boolean = false;
  private _memo: number = 0;

  start() {
    if(this.idInterval) {
      return;
    }
    let start = Date.now() - this._memo;
    this.idInterval = window.setInterval(() => {
      this.ms = (Date.now() - start);
    });
  }

  stop() {
    if(!this.idInterval) {
      return;
    }
    window.clearInterval(this.idInterval);
    this.idInterval = null;
    this._memo = this.ms;
  }

  reset() {
    if(this.ms === 0) {
      return;
    }
    this.showConfirmBox = true;
  }

  confirmReset(ok: boolean) {
    this.showConfirmBox = false;
    if(ok) {
      this.stop();
      this.ms = 0;
      this._memo = 0;
    }
  }

}
