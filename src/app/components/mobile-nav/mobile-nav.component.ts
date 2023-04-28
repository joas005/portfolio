import { Component } from '@angular/core';

@Component({
	selector: 'app-mobile-nav',
	templateUrl: './mobile-nav.component.html',
	styleUrls: ['./mobile-nav.component.css'],
})
export class MobileNavComponent {
	controlMenu: boolean = false;
	changePosition: string = 'relative';

	showHideMenu(state: boolean): void {
		if (state) {
			this.controlMenu = false;
			this.changePosition = 'relative';
		} else {
      this.controlMenu = true;
			this.changePosition = 'fixed';
		}
	}

  goToSection():void {
    this.controlMenu = false;
		this.changePosition = 'relative';
  }
}
