import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular';  
import { FormateoFechaPipe } from '../../pipes/formateo-fecha.pipe';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  nombre: string = '';
  apellido: string = '';
  password: string = '';
  correo: string = '';
  selectedOption: string = '';
  selectedDate: any = '';

  constructor(
    private alertController: AlertController,
    private MenuController: MenuController,
    private formateoFechaPipe: FormateoFechaPipe,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.MenuController.close('main-menu');
  }

  async guardar() {
    const fechaFormateada = this.formateoFechaPipe.transform(this.selectedDate);

    // Guarda los datos en el servicio
    this.usuarioService.setUsuario({
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      password: this.password,
      educacion: this.selectedOption,
      fechaNacimiento: fechaFormateada
    });

    const alert = await this.alertController.create({
      header: 'Registro guardado',
      message: `${this.nombre} ${this.apellido}\nFecha de nacimiento: ${fechaFormateada}`,
      buttons: [{
        text: 'OK',
        handler: () => {
          // Redirigir al home
          window.location.href = '/home';
        }
      }]
    });
    

    await alert.present();
  }
}
