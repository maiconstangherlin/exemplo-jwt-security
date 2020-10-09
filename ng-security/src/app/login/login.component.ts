import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    button {
      width: 100%;
    }
  `],
})
export class LoginComponent implements OnInit {

  usuario: string;
  senha: string;

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.loginService.isLoggedIn()) {
      this.router.navigateByUrl('inicio');
    }
  }

  login(): void {
    this.loginService.login(this.usuario, this.senha).subscribe(r => {
      localStorage.setItem('Authorization', r.token);
      this.router.navigateByUrl('inicio');
    }, () => alert('Erro de autenticação.'));
  }
}
