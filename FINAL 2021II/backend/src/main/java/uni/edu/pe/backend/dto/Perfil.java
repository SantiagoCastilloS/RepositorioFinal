package uni.edu.pe.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Perfil {
    private String codigoPerfil;
    private String nombrePerfil;
    private String indicadorPerfil;
}
