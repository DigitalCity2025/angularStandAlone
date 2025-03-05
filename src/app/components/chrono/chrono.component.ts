import { Component } from '@angular/core';
import { TimePipe } from "../../pipes/time.pipe";

@Component({
  selector: 'app-chrono',
  imports: [TimePipe],
  templateUrl: './chrono.component.html',
  styleUrl: './chrono.component.scss'
})
export class ChronoComponent {

  ms: number = 0;
  idInterval: number|null = null;
  memo: number = 0;

  start() {
    if(this.idInterval) {
      return;
    }
    let start = Date.now() - this.memo;
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
    this.memo = this.ms;
  }

  reset() {
    if(this.ms === 0) {
      return;
    }
    this.stop();
    this.ms = 0;
    this.memo = 0;
  }

}
