import { Component, OnInit, Input } from '@angular/core';
import { dataBase } from '../../../assets/data/database';

@Component({
	selector: 'app-projects-images',
	templateUrl: './projects-images.component.html',
	styleUrls: ['./projects-images.component.css'],
})
export class ProjectsImagesComponent {
	@Input()
	projectId: string = '0';
	@Input()
	gridType: string = 'regular';
	imageOrder: number = 1;
	textOrder: number = 2;


	projectName: string = '';
	projectImage: string = '';
	projectDescription1: string = '';
	projectDescription2: string = '';
	projectLink: string = '';

	ngOnInit(): void {
		this.sortingGrid (this.gridType)
		this.setValuesToComponent(this.projectId);
	}

	sortingGrid (gridType: string) {
		if (gridType == 'inverse') {
			this.imageOrder = 2;
			this.textOrder = 1;
		}
	}

	setValuesToComponent(id: string | null) {
		const project = dataBase.filter(
			(article) => article.id == this.projectId
		)[0];
		this.projectName = project.title;
		this.projectImage = project.image;
		this.projectDescription1 = project.description1;
		this.projectDescription2 = project.description2;
		this.projectLink = project.link;
	}
}
