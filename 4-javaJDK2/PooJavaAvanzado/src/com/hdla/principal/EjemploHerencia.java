package com.hdla.principal;

import com.hdla.herencia.BasePadre;
import com.hdla.herencia.Hija;
import com.hdla.herencia.Hijo;
import com.hdla.herencia.ObtenerDatos;

public class EjemploHerencia {
    public static void main(String[] args) {
        ObtenerDatos nuevoObtenerDatos = new ObtenerDatos();
        nuevoObtenerDatos.obtenDatos();
        System.out.println(nuevoObtenerDatos.regresaDatos());
    Hija h =new Hija();
    h.visualizarA();
        Hijo ho = new Hijo();
        ho.visualizarABC();

        BasePadre obj = new BasePadre();
        obj.setA(2357);

        System.out.println( "Atributo de Clase Base Padre ->"  +h.getA());

    }
}
