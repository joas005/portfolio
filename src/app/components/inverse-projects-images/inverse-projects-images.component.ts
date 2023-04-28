import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inverse-projects-images',
  templateUrl: './inverse-projects-images.component.html',
  styleUrls: ['./inverse-projects-images.component.css']
})
export class InverseProjectsImagesComponent {
  @Input ()
  projectName: string = '';
}
