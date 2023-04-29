import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-mobile-nav',
	templateUrl: './mobile-nav.component.html',
	styleUrls: ['./mobile-nav.component.css'],
})
export class MobileNavComponent {
	ngOnInit(): void {
		const theme = localStorage.getItem('theme');
		theme && document.body.classList.add(theme);
		this.toggleTheme();
	}

	toggleTheme() {
		document.body.classList.toggle('lightTheme');
		if (document.body.classList.contains('lightTheme')) {
			localStorage.setItem('theme', 'lightTheme');
		} else {
			localStorage.removeItem('theme');
		}
	}

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

	goToSection(): void {
		this.controlMenu = false;
		this.changePosition = 'relative';
	}
}
