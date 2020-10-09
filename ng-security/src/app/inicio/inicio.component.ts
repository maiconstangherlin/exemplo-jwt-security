import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';
import {Router} from '@angular/router';
import {UsuarioService} from '../usuario/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  token: string;

  constructor(private loginService: LoginService,
              private usuarioService: UsuarioService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.token = this.loginService.getToken();
    this.usuarioService.findAll().subscribe(r => console.log(r));
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigateByUrl('login');
  }
}
