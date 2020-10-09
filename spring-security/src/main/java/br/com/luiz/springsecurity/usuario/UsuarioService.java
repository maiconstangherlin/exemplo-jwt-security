package br.com.luiz.springsecurity.usuario;

import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UsuarioService extends UserDetailsService {

    List<Usuario> findAll();

    void save(Usuario usuario);
}
