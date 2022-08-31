package com.hdla.h_abstrata;

public class Triangulo extends FigurasGeometrica {
    private float altura;





    public Triangulo(float base, float altura) {
       super("Triangulo");
        this.base = base;
        this.altura = altura;
    }

    @Override
    public float area(){
        return (getBase()*getAltura())/2;
    }

    public float getBase() {return base;}

    public float getAltura() {
        return altura;
    }

    public void setBase(float base) {
        this.base = base;
    }

    public void setAltura(float altura) {
        this.altura = altura;
    }
}