import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router,) {}

  redirigir(){ 
    let navigationExtras: NavigationExtras = {
  
    }
  
    this.router.navigate(['home'], navigationExtras);
    this.router.navigate(['login'], navigationExtras);
    this.router.navigate(['registro'], navigationExtras);
    this.router.navigate(['samsung'], navigationExtras);
    this.router.navigate(['xiaomi'], navigationExtras);

  }
}
