import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {
  nombre = '';
  apellido = '';
  usuario = '';
  educacion = '';
  fechaNacimiento = '';
  password = '';
  tarjeta = '';

  constructor(private usuarioService: UsuarioService, private alertController: AlertController) { }

  ngOnInit() {
    const datos = this.usuarioService.getUsuario();
    this.nombre = datos.nombre || '';
    this.apellido = datos.apellido || '';
    this.usuario = datos.usuario || '';
    this.educacion = datos.educacion || '';
    this.fechaNacimiento = datos.fechaNacimiento || '';
    this.password = datos.password || '';
    this.tarjeta = datos.tarjeta || '';
  }

  guardarCambios() {
    this.usuarioService.actualizarUsuario({
      nombre: this.nombre,
      apellido: this.apellido,
      educacion: this.educacion,
      fechaNacimiento: this.fechaNacimiento,
      password: this.password,
      tarjeta: this.tarjeta
    });
    this.alertController.create({
      header: 'Perfil actualizado',
      message: 'Tus datos han sido actualizados correctamente.',
      buttons: ['OK']
    }).then(alert => alert.present());
  }
}
