import java.util.ArrayList;
import java.util.List;

public class Colecciones {
    public static void main(String[] args) {
        //List--ArrayList
        // Los valores se ordenan segun el orden en que los agreguemos
        //Permiten valores duplicados
        //Esuna coleccion de objetos
        List<String> meses = new ArrayList<>();
        meses.add("Enero");
        meses.add("Febrero");
        meses.add("Marzo");
        meses.add( 1, "Abril");//Metodo para especificar donde agregar un elemento o solo agregar
       String mes = meses.remove(3);//Metodo para eliminar elemento

       //Metodos
        System.out.println(meses);
        System.out.println(mes);
        System.out.println(meses.get(0));//Nos imprime el elemento especificado
        System.out.println(meses.size());//Nos da cantidad de elementos
        for (String elemento : meses){
            System.out.println(elemento);
        }

          // clase envolvente o wraper las colecciones no aceptan datos primitivos
           int num1 =10;
        Integer num2 = 10;


        System.out.println(num1 + 10);
        System.out.println(num2 - 5);
        System.out.println(num2.getClass().getSimpleName());

        List<Integer> numeros = new ArrayList<Integer>();
        numeros.add(2);
        numeros.add(500);
        numeros.add(98);
        numeros.add(90);
    }
}
