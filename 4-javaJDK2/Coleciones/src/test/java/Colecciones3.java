
import java.util.*;

public class Colecciones3 {
    public static void main(String[] args) {
        System.out.println("ArrayList");
           List<String> comidas =new ArrayList<String>();
        comidas.add("Pozole");
        comidas.add("Tostada");
        comidas.add("Ceviche");
        comidas.add(2,"Esquite");
        System.out.println(comidas);

        //Otra forma de iniciarlizzar otra lista
        List<Integer> numeros = new ArrayList<Integer>(Arrays.asList(1, 2, 3, 579, 48) );
        System.out.println(numeros);



        System.out.println("-----------");
        System.out.println("HashSet");
        Set<String> ciudades = new HashSet<>();
        ciudades.add("CDMX");
        ciudades.add("GDL");
        ciudades.add("MTY");
        System.out.println(ciudades);


        //Otra forma de crear un HashSet
        Set<Boolean> verdad = new HashSet<Boolean>(Arrays.asList(true, false,true,false));
        System.out.println(verdad);

        System.out.println("---------");

        //Tercera coleccion HashMap
        //Nos permite guardar pares de informacion
        //Llave valor
        //HashMap<Llave, Valor>
        System.out.println("HashMap");

        Map<Integer, String> alumnos = new HashMap<Integer, String>() ;
        alumnos.put(1, "Pedro");
        alumnos.put(2, "Sofia");
        alumnos.put(3, "Salma");
        alumnos.put(4, "Miguel");

        System.out.println(alumnos);
        System.out.println(alumnos.size());
        System.out.println(alumnos.values());//Lista de valores
        System.out.println(alumnos.keySet());//Lista de las llaves
        System.out.println(alumnos.get(3));//LLama el valor especificado

       // Object llaves = alumnos.keySet().toArray()[2];
        //System.out.println(alumnos.get(llaves));
for (int i=0; i< alumnos.size(); i++){
    Object llaves = alumnos.keySet().toArray()[i];
    System.out.println(alumnos.get(llaves));
} for (Integer llave : alumnos.keySet()){
            System.out.println(llave + " - " + alumnos.get(llave));

        }


    }
}
