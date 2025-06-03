import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  educacion: string = '';
  fechaNacimiento: any;

  constructor(private alertCtrl: AlertController) {
    // Se recibe al usuario desde el login 
    const nav = window.history.state;
    if (nav && nav.email) {
      this.usuario = nav.email;
    }
  }

  limpiar(nombreInput: any, apellidoInput: any) {
    this.nombre = '';
    this.apellido = '';
    this.educacion = '';
    this.fechaNacimiento = '';

    // Limpia los campos del formulario
    nombreInput.control.markAsTouched();
    apellidoInput.control.markAsTouched();

    const inputs = document.querySelectorAll('.animated-input');
    inputs.forEach(input => {
      input.classList.remove('animate');
      void (input as HTMLElement).offsetWidth; 
      input.classList.add('animate');
    });
  }

  async mostrar() {
    const alert = await this.alertCtrl.create({
      header: 'Usuario',
      message: `Su nombre es ${this.nombre} ${this.apellido}`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
