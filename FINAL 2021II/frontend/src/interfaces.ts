export interface Consulta{
   codigoUsr: string;
   cuentaUsr: string;
   nombreUsr: string;
   passUsr: string;
   codigoPerfil: string;
   nombrePerfi: string;
   indicadorPerfil: number;
   codigoApp: string;
   nombreApp: string;
}


export interface RespuestaConsulta{
  consultas: Consulta[];
}

export interface Aplicacion{
  codigoApp: string;
  nombreApp: string;
}

export interface Perfil{
  codigoPerfil: string;
}
