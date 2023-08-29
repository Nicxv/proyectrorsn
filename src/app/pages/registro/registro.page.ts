import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombreR : string= "";
  apellidoR : string= "";
  emailR : string= "";
  claveR : string= "";
  claveR2 : string= "";


  

  constructor() { }

  ngOnInit() {
  }

}
