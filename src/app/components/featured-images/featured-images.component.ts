import { Component } from '@angular/core';
import { dataFeatured } from '../../../assets/data/dataFeatured';

@Component({
	selector: 'app-featured-images',
	templateUrl: './featured-images.component.html',
	styleUrls: ['./featured-images.component.css'],
})
export class FeaturedImagesComponent {
	numId: string = '1';
	featuredImages: string[] = [
		'https://placehold.co/600x640/png',
		'https://placehold.co/600x640/png',
		'https://placehold.co/600x640/png',
		'https://placehold.co/600x640/png',
		'https://placehold.co/600x640/png',
		'https://placehold.co/600x640/png',
	];

	ngOnInit(): void {
		this.setValuesToComponent(this.numId);
	}

	setValuesToComponent(id: string | null) {
		const project = dataFeatured.filter((article) => article.id == this.numId)[0];
		if (project.images == undefined) {
			this.featuredImages = [
				'https://placehold.co/600x640/png',
				'https://placehold.co/600x640/png',
				'https://placehold.co/600x640/png',
				'https://placehold.co/600x640/png',
				'https://placehold.co/600x640/png',
				'https://placehold.co/600x640/png',
			];
		} else {
			this.featuredImages = project.images;
		}
	}
}
