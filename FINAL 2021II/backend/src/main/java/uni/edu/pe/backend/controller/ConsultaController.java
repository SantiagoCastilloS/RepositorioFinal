package uni.edu.pe.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import uni.edu.pe.backend.dto.Aplicacion;
import uni.edu.pe.backend.dto.Consulta;
import uni.edu.pe.backend.dto.Perfil;
import uni.edu.pe.backend.dto.rest.RespuestaConsulta;
import uni.edu.pe.backend.service.ConsultaService;

@RestController
@CrossOrigin(origins = {"*"})
public class ConsultaController {
    @Autowired
    private ConsultaService service;
    @RequestMapping (value = "/obtenerReporte",
            method = RequestMethod.POST,
            produces = "application/json;charset=utf-8"
    )
    public RespuestaConsulta obtenerReporte(){
        RespuestaConsulta rpta = new RespuestaConsulta();
        rpta.setConsultas(service.obtenerReporte());
        return rpta;
    }

    @RequestMapping(
            value = "/registrarAplicacion",
            method = RequestMethod.POST,
            produces = "application/json;charset=utf-8"
    )
    public Aplicacion registrarAplicacion(@RequestBody Aplicacion aplicacion) {
        return service.registrarAplicacion(aplicacion);
    }

    @RequestMapping(
            value = "/actualizarIndicadorPerfil",
            method = RequestMethod.POST,
            produces = "application/json;charset=utf-8"
    )
    public Perfil actualizarTabla(@RequestBody Perfil perfil) {
        return service.actualizarIndicadorPerfil(perfil);
    }

}
