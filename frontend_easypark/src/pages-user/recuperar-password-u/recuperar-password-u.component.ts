import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { HeaderGeneralComponent } from "../../header-general/header-general.component";

@Component({
  selector: 'app-recuperar-password-u',
  imports: [CommonModule, FormsModule, HttpClientModule, HeaderGeneralComponent],
  templateUrl: './recuperar-password-u.component.html',
  styleUrl: './recuperar-password-u.component.css'
})
export class RecuperarPasswordUComponent {
  email: string = '';
  mensaje: string = '';
  error: string = '';

  constructor(private http: HttpClient) {}

  recuperarContrasenia() {
    this.mensaje = '';
    this.error = '';
  
    this.http.post<{ message: string }>('http://localhost:8082/recuperar-contrasenia', null, { 
      params: { email: this.email }
    }).subscribe({
      next: (response) => {
        this.mensaje = response.message; // Ahora accederá correctamente
      },
      error: (err) => {
        this.error = err.error.message || 'Error al recuperar contraseña.';
      }
    });
  }
}
