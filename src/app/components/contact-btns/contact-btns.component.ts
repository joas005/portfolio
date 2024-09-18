import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-btns',
  templateUrl: './contact-btns.component.html',
  styleUrls: ['./contact-btns.component.css']
})
export class ContactBtnsComponent {
  buttonText: string = 'Meu número'; // Texto padrão do botão

  // Função para copiar o texto para a área de transferência
  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      // Atualiza o texto do botão para "Copiado!"
      this.buttonText = 'Copiado!';

      // Retorna o texto original após 3 segundos
      setTimeout(() => {
        this.buttonText = 'Meu número';
      }, 3000);
    }).catch(err => {
      console.error('Falha ao copiar', err);
    });
  }
}
