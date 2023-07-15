package uni.edu.pe.backend.dao;

import uni.edu.pe.backend.dto.Aplicacion;
import uni.edu.pe.backend.dto.Consulta;
import uni.edu.pe.backend.dto.Perfil;

import java.util.List;

public interface ConsultaDao {
    List<Consulta> obtenerReporte();
    Aplicacion registrarAplicacion(Aplicacion aplicacion);
    Perfil actualizarIndicadorPerfil(Perfil perfil);
}
