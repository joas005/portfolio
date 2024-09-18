import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  anoNascimento: Date = new Date('2005-06-10'); // Data específica
  idade: number = 0; // Variável para armazenar a diferença de anos

  constructor() { }

  ngOnInit(): void {
    this.calculateYearDifference();
  }

  calculateYearDifference(): void {
    const currentDate = new Date(); // Data atual
    const anoNascimento = this.anoNascimento.getFullYear();
    const currentYear = currentDate.getFullYear();

    // Calcula a diferença de anos
    this.idade = currentYear - anoNascimento;
  }
}
