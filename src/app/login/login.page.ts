import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {

  email: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  async login() {
    // Validación simple
    if (this.email === 'admin@example.com' && this.password === '123456') {
      this.navCtrl.navigateRoot('/home'); // Ruta a la página de inicio
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Correo o contraseña incorrectos',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
