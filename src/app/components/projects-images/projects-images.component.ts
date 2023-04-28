import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects-images',
  templateUrl: './projects-images.component.html',
  styleUrls: ['./projects-images.component.css']
})
export class ProjectsImagesComponent {
  @Input ()
  projectName: string = '';
}
