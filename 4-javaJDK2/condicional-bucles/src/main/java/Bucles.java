import java.util.Objects;
import java.util.Scanner;

public class Bucles {
    public static void main(String[] args) {
  for (int i=0; i<10; i++){
      System.out.println(i);
  }
    //While- bucle no controlado
        // mientras la condicion sea true

        String condicion = "";
  Scanner sc = new Scanner(System.in);


  //Comparamos datos primitivos

        while(!Objects.equals(condicion, "Hola")){
            System.out.println("Saludame");
        condicion = sc.next();
        }
    //Do = al while
        //do while ejecuta la accion aunque sea una vez
        do {
            System.out.println("Saludame x2");
            condicion = sc.next();
        } while(!Objects.equals(condicion, "Hola"));

    }
}
