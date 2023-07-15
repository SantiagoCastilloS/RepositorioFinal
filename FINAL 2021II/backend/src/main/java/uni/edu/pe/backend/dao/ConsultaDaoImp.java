package uni.edu.pe.backend.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import uni.edu.pe.backend.dto.Aplicacion;
import uni.edu.pe.backend.dto.Consulta;
import uni.edu.pe.backend.dto.Perfil;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
@Repository
public class ConsultaDaoImp implements ConsultaDao {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    private Connection conexion;

    private void obtenerConexion(){
        try {
            this.conexion = jdbcTemplate.getDataSource().getConnection();
        } catch (SQLException throwables) {
            throw new RuntimeException(throwables);
        }
    }
    private void cerrarConexion(ResultSet resultado, Statement sentencia){
        try {
            if(resultado != null)
                resultado.close();
            if(sentencia != null)
                sentencia.close();
            this.conexion.commit();
            this.conexion.close();
            this.conexion = null;
        } catch (SQLException throwables) {
            throw new RuntimeException(throwables);
        }
    }
    @Override
    public List<Consulta> obtenerReporte() {
        List<Consulta> list = new ArrayList<>();
        String sql = "SELECT u.codigo_usr, u.cuenta_usr, u.nombre_usr, u.pass_usr, u.codigo_perfil, p.nombre_perfil, p.indicador 'indicador_perfil', a.codigo_app, a.nombre_app FROM usuario u INNER JOIN perfil p ON (u.codigo_perfil = p.codigo_perfil) INNER JOIN perfil_aplicacion pa ON (pa.codigo_perfil = p.codigo_perfil) INNER JOIN aplicacion a ON (pa.codigo_app = a.codigo_app);";
        try{
            obtenerConexion();
            Statement st = conexion.createStatement();
            ResultSet rs = st.executeQuery(sql);
            while (rs.next()){
                list.add(extraerConsulta(rs));
            }
            cerrarConexion(rs,st);
        } catch (SQLException throwables){
            throwables.printStackTrace();
        }
        return list;
    }

    @Override
    public Aplicacion registrarAplicacion(Aplicacion aplicacion) {
        try{
            obtenerConexion();
            String sql = "INSERT INTO aplicacion VALUES(?, ?);";
            PreparedStatement st = conexion.prepareStatement(sql);
            st.setString(1, aplicacion.getCodigoApp());
            st.setString(2, aplicacion.getNombreApp());
            st.executeUpdate();
            st.close();
            cerrarConexion(null, st);
        }catch(SQLException e){
            throw new RuntimeException(e);
        }
        return aplicacion;
    }

    @Override
    public Perfil actualizarIndicadorPerfil(Perfil perfil) {
        try{
            obtenerConexion();
            String sql = "UPDATE perfil SET indicador = 0 WHERE codigo_perfil = ?;";
            PreparedStatement st = conexion.prepareStatement(sql);
            st.setString(1, perfil.getCodigoPerfil());
            st.executeUpdate();
            st.close();
            cerrarConexion(null, st);

        } catch (SQLException e){
            e.printStackTrace();
        }
        return null;
    }
    private Consulta extraerConsulta (ResultSet resultado) throws SQLException {
        return new Consulta(resultado.getString("codigo_usr"), resultado.getString("cuenta_usr"), resultado.getString("nombre_usr"), resultado.getString("pass_usr"), resultado.getString("codigo_perfil"), resultado.getString("nombre_perfil"), resultado.getInt("indicador_perfil"), resultado.getString("codigo_app"), resultado.getString("nombre_app"));
    }

}
