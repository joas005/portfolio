import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css'],
})
export class NavComponent {
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
}
