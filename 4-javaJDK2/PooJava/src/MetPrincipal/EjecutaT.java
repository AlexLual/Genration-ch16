package MetPrincipal;

import MenuP.MenuOp;
import MiEjemploJava.Persona;
import MiEjemplosaludo.Saludo;

import java.util.Scanner;

public class EjecutaT {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        MenuOp menuOp = new MenuOp();
        menuOp.menu();
        System.out.println("Elija una opcion ->");
        int op = sc.nextInt();
        switch (op){

            case 1:
                Saludo s = new Saludo();
                s.saludar0();
                System.out.println();
                s.saludar();
                System.out.println(s.saludar0());
                break;
            case 2:
                Persona p = new Persona();
                p.getNombre();
                p.getEdad();
                p.getNss();


                break;
            case 3:

                break;
            case 4:
                break;
            default:
        }
    }
}
