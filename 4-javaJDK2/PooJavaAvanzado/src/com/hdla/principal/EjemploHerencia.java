package com.hdla.principal;

import com.hdla.herencia.BasePadre;
import com.hdla.herencia.Hija;
import com.hdla.herencia.Hijo;
import com.hdla.herencia.ObtenerDatos;

import java.util.ArrayList;

public class EjemploHerencia {
    public static void main(String[] args) {
        ObtenerDatos nuevoObtenerDatos = new ObtenerDatos();
        nuevoObtenerDatos.obtenDatos();
        System.out.println(nuevoObtenerDatos.regresaDatos());
    Hija h =new Hija();
    h.visualizarA();
        Hijo ho = new Hijo();

        ho.setA(14659);
        ho.visualizarABC();

        BasePadre objB = new BasePadre();
        objB.setA(2357);

        Object miObj = new BasePadre();

        List <T>obj = new ArrayList<>();
        System.out.println( "Atributo de Clase Base Padre ->"  + objB.getA());
        System.out.println("Atributo de clase hijo ->" + ho.getA());

    }
}
