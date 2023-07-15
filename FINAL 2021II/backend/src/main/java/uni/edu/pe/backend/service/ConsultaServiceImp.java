package uni.edu.pe.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uni.edu.pe.backend.dao.ConsultaDao;
import uni.edu.pe.backend.dto.Aplicacion;
import uni.edu.pe.backend.dto.Consulta;
import uni.edu.pe.backend.dto.Perfil;

import java.util.List;
@Service
@Transactional
public class ConsultaServiceImp implements ConsultaService {
    @Autowired
    private ConsultaDao dao;
    @Override
    public List<Consulta> obtenerReporte() {
        return dao.obtenerReporte();
    }

    @Override
    public Aplicacion registrarAplicacion(Aplicacion aplicacion) {
        return dao.registrarAplicacion(aplicacion);
    }

    @Override
    public Perfil actualizarIndicadorPerfil(Perfil perfil) {
        return dao.actualizarIndicadorPerfil(perfil);
    }

}
