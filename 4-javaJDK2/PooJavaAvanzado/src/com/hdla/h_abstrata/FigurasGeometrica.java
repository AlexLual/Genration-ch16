package com.hdla.h_abstrata;

 abstract public class FigurasGeometrica {
private String nombre;
    protected float base;
    public abstract float area();
public FigurasGeometrica(String nombre){
    this.nombre = nombre;}

@Override
    public String toString(){
    return nombre + "area  ->"+ area();
  }
 }