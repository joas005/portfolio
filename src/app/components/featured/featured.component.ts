import { Component, OnInit, Input } from '@angular/core';
import { dataFeatured } from '../../../assets/data/dataFeatured';

@Component({
	selector: 'app-featured',
	templateUrl: './featured.component.html',
	styleUrls: ['./featured.component.css'],
})
export class FeaturedComponent {
	@Input()
	numId: string = "0";
	featuredTitle: string = '';
	featuredLink: string = '';
	featuredDescription: string | undefined = '';
	featuredTecnologies: string[] | undefined = [];
	featuredType: string | undefined = '';
	featuredVersion: string | undefined = '';

	ngOnInit(): void {
		this.setValuesToComponent(this.numId);
	}

	setValuesToComponent(id: string | null) {
		const project = dataFeatured.filter((article) => article.id == this.numId)[0];
		this.featuredTitle = project.title;
		this.featuredLink = project.link;
		this.featuredDescription = project.description;
		this.featuredTecnologies = project.tech;
		this.featuredType = project.type;
		this.featuredVersion = project.lastVersion;
	}
}
