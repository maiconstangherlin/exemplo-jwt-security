import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class LoginService {

  url = environment.api_url + 'auth';

  constructor(private http: HttpClient) {
  }

  login(usuario: string, senha: string): Observable<any> {
    return this.http.post(this.url, {usuario, senha});
  }

  logout(): void {
    localStorage.removeItem('Authorization');
  }

  getToken(): string {
    return localStorage.getItem('Authorization');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('Authorization') != null;
  }
}
