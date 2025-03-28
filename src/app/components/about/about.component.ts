import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    anoNascimento: Date = new Date('2005-09-15'); // Data específica
    idade: number = 0; // Variável para armazenar a idade correta
  
    constructor() { }
  
    ngOnInit(): void {
      this.calculateYearDifference();
    }
  
    calculateYearDifference(): void {
      const currentDate = new Date(); // Data atual
      const birthYear = this.anoNascimento.getFullYear();
      const birthMonth = this.anoNascimento.getMonth();
      const birthDay = this.anoNascimento.getDate();
  
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const currentDay = currentDate.getDate();
  
      // Calcula a idade baseando-se no ano
      this.idade = currentYear - birthYear;
  
      // Se o aniversário ainda não ocorreu este ano, subtrai 1 da idade
      if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        this.idade--;
      }
    }  
}
