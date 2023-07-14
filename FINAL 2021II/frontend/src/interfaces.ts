export interface Consulta {
  codigoUsr: string;
  cuentaUsr: string;
  nombreUsr: string;
  passUsr: string;
  codigoPerfil: string;
  nombrePerfil: string;
  indicadorPerfil: number;
  codigoApp: string;
  nombreApp: string;
}
export interface RespuestaConsulta{
  consultas: Consulta[];
}




export interface Aplicacion {
  codigoApp: string;
  nombreApp: string
}

export interface Perfil {
  codigoPerfil: string;
  nombrePerfil: string;
  indicador: string;
}
