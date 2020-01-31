import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listadoCurso: string[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP'];
  habilitar: boolean = true;
  constructor() { }

  setHabilitar(){
    this.habilitar = !this.habilitar;
  }
}
