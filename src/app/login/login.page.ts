import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importamos Router si es necesario para navegación

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {

  email: string = ''; // declaramos las variables que vamos a utilizar
  password: string = '';

  constructor( // Ingresamos los servicios necesarios
    private navCtrl: NavController, // para la navegación
    private alertCtrl: AlertController // para mostrar alertas
  ) {}

  async login() { // Método para manejar el inicio de sesión 
    this.navCtrl.navigateRoot('/home', {
      state: { email: this.email }
    });
  }

}
