import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from './usuario';

@Injectable()
export class UsuarioService {

  url = environment.api_url + 'usuario';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }
}
