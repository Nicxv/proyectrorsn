import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  emailErrorL: string = '';
  email: string = '';
  clave: string = '';
  claveErrorL: string = '';

  mostrarClave: boolean = false;
  

  constructor(private navCtrl: NavController) { }
  

  logearse() {

    //validacion del email
    if (!this.email) {
      this.emailErrorL = 'El email es obligatorio.';
    } else if (!this.validarFormatoEmail(this.email)) {
      this.emailErrorL = 'El email debe tener un formato válido.';
    } else {
      this.emailErrorL = '';
    }

    //validacion de la clave
    if (!this.clave) {
      this.claveErrorL = 'La clave es obligatoria.';
    } else if (this.clave.length < 8) {
      this.claveErrorL = 'La clave debe tener al menos 8 caracteres.';
  
    } else if (!/[A-Z]/.test(this.clave)){
      this.claveErrorL = 'La clave debe contener al menos una letra mayúscula.';

    } else if(!/[0-9]/.test(this.clave)){
      this.claveErrorL = 'La clave debe contener al menos un numero.';

    } else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(this.clave)){
      this.claveErrorL = 'La clave debe contener al menos un caracter especial';
    
    } else {
      this.claveErrorL = '';
    }

    if (!this.emailErrorL && !this.claveErrorL) {
      // Si no hay errores en ningún campo, redirigir a otra página
      this.navCtrl.navigateForward('/login'); // Cambia 'login' por la ruta de la página deseada
    }
  }

  //validacion solo para el formato del email
  validarFormatoEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  toggleMostrarClave() {
    this.mostrarClave = !this.mostrarClave;
  }

  ngOnInit() {
  } 

}
