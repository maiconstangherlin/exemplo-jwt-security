package br.com.luiz.springsecurity.usuario;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("usuario")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping()
    public List<Usuario> findAll() {
        return usuarioService.findAll();
    }

    @PostMapping
    public void save(@RequestBody Usuario usuario) {
        usuarioService.save(usuario);
    }
}
