import java.util.Scanner;

public class Edad {
    public static void main(String[] args) {
        System.out.println("Esta es la clase Edad");
        //Deterimnar si una persona es mayor de edad
        //tener la edad pedir al usuario
        //Condicional para saber si es mayor de edad
        //-let nombre = promt("Escribe tu edad"

        Scanner escaner = new Scanner(System.in);//
        System.out.println("Escribe tu edad:");
        int edad = escaner.nextInt();

        System.out.println(edad);
        if (edad >= 18){
            System.out.println("Eres mayor de edad");
        }else {
            System.out.println("Eres menor de edad");
        }
        //operador termario
        String resultado = (edad >= 18)?"Eres mayor" :"Eres carcel";
            System.out.println(resultado);

    }
}
