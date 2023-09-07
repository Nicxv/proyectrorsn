
import { NavigationExtras, Router } from '@angular/router';
import { Component, ElementRef, ViewChild} from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import Swiper from 'swiper/types/swiper-class';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    'https://eshopex.cl/images/header/header-xiaomi-movil.jpg',
    'https://elcomercio.pe/resizer/G-rcrKdeYrdSchfeTCIuP09MOj4=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XN46XOIQ6FDC5NB7SHK5JOETBI.jpg',
    'https://hips.hearstapps.com/hmg-prod/images/samsung-promo-wide-64c1142c98ba4.jpg',
    'https://laopinion.com/wp-content/uploads/sites/3/2022/07/GettyImages-1198286696.jpg?quality=75&strip=all&w=1200',
  ];
  
  private animation!: Animation;


  constructor(private router: Router, private animationCtrl: AnimationController) {}
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper; 
  }

  goNext() {
    this.swiper?.slideNext();
  }
  goPrev() {
    this.swiper?.slidePrev();
  }

  swiperSlideChanged(e: any){
    console.log('changed: ', e);
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');
  }

  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }

  redirigir(){ 
    let navigationExtras: NavigationExtras = {
  
    }
  
    this.router.navigate(['samsung1'], navigationExtras);

  }



}
