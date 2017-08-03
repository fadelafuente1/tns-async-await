import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
  constructor() {
    this
  }

  private async timerout() {
    const p = new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    await p;

    console.log('finished');
  }
}
