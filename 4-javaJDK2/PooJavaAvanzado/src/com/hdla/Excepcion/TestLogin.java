package com.hdla.Excepcion;

public class TestLogin {
    public static void main(String[] args) {
        try {
            Aplicacion app = new Aplicacion();
// intento el login
            com.hdla.Excepcion.Usuario u = app.login("juan", "juan123sito");
// muestro el resultado
            System.out.println("\t\t -->" + u.getNombre());
            System.out.println("\t\t -->" + u.getEmail());

        } catch (Exception ex) {
// ocurrio un error
            System.out.print("Servicio temporalmente interrumpido: ");
            System.out.println(ex.getMessage());
        }
    }

    public static class Usuario {
        private String usrname;
        private String password;
        private String nombre;
        private String email;

        public String getUsrname() {
            return usrname;
        }

        public String getPassword() {
            return password;
        }

        public String getNombre() {
            return nombre;
        }

        public String getEmail() {
            return email;
        }

        public void setUsrname(String usrname) {
            this.usrname = usrname;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public void setEmail(String email) {
            this.email = email;
        }
    }
}