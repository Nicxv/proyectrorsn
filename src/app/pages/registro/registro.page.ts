import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  nombreError: string = '';
  apellidoError: string = '';
  emailError: string= '';
  email: string = '';
  clave: string = '';
  claveError: string = '';
  repetirClave: string = '';
  error: string = '';

  mostrarClave: boolean = false;

  constructor(private navCtrl: NavController) {}

  registrarse() {
    // Validación del nombre
    if (!this.nombre) {
      this.nombreError = 'El nombre es obligatorio.';
    } else if (!/^[a-zA-Z]+$/.test(this.nombre)) {
      this.nombreError = 'El nombre debe contener solo letras.';
    } else {
      this.nombreError = '';
    }

    // Validación del apellido
    if (!this.apellido) {
      this.apellidoError = 'El apellido es obligatorio.';
    } else if (!/^[a-zA-Z]+$/.test(this.apellido)) {
      this.apellidoError = 'El apellido debe contener solo letras.';
    } else {
      this.apellidoError = '';
    }

    //validacion del email
    if (!this.email) {
      this.emailError = 'El email es obligatorio.';
    } else if (!this.validarFormatoEmail(this.email)) {
      this.emailError = 'El email debe tener un formato válido.';
    } else {
      this.emailError = '';
    }
    //validacion de la clave
    if (!this.clave) {
      this.claveError = 'La clave es obligatoria.';
    } else if (this.clave.length < 8) {
      this.claveError = 'La clave debe tener al menos 8 caracteres.';
  
    } else if (!/[A-Z]/.test(this.clave)){
      this.claveError = 'La clave debe contener al menos una letra mayúscula.';

    } else if(!/[0-9]/.test(this.clave)){
      this.claveError = 'La clave debe contener al menos un numero.';

    } else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(this.clave)){
      this.claveError = 'La clave debe contener al menos un caracter especial';
    
    } else {
      this.claveError = '';
    }

    
    if (!this.nombre || !this.apellido || !this.email || !this.clave || !this.repetirClave) {
      this.error = 'Todos los campos son obligatorios.';
    } else if (this.clave !== this.repetirClave) {
      this.error = 'Las claves no coinciden.';
    } else {
      // Realizar el proceso de registro aquí 
      this.error = ''; // Limpiar el mensaje de error
      // Redirigir a la página de éxito o hacer lo que sea necesario
    }  

    if (!this.nombreError && !this.apellidoError && !this.emailError && !this.claveError && !this.error) {
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
