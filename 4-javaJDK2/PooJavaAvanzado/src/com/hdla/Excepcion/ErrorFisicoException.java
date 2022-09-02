package com.hdla.Excepcion;

public class ErrorFisicoException extends Exception{
    public ErrorFisicoException(Exception ex){
        super("\t\t\t <--Ocurrio un error fisico--> ", ex);
    }

}
