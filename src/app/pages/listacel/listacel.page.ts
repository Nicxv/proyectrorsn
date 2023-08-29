import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listacel',
  templateUrl: './listacel.page.html',
  styleUrls: ['./listacel.page.scss'],
})
export class ListacelPage implements OnInit {

  listaC: any = [{

      samsung1: "Samsung galaxy z fold 2",
      samsung2: "Samsung galaxy s23 ultra",
      samsung3: "Samsung galaxy z flip 5",
      xiaomi1: "Xiaomi 12 pro",
      xiaomi2: "Xiaomi mi 11 ultra",
      xiaomi3: "Xiaomi 13 ultra",
    
    }];

  constructor() { }

  ngOnInit() {
  }

}
