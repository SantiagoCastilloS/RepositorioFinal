package uni.edu.pe.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Consulta {
    private String codigoUsr;
    private String cuentaUsr;
    private String nombreUsr;
    private String passUsr;
    private String codigoPerfil;
    private String nombrePerfil;
    private int indicadorPerfil;
    private String codigoApp;
    private String nombreApp;





}
