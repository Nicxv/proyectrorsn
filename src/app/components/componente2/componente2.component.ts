import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss'],
})
export class Componente2Component  implements OnInit {
  @Input() nombre: string = "";
  @Input() apellido: string = "";
  @Input() telefono: number = 0;


  constructor() { }

  ngOnInit() {}

}

