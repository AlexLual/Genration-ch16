import java.util.HashSet;
import java.util.Set;

public class Colecciones2 {
    public static void main(String[] args) {
        //SET
        //HasSet
        //No guarda los valores como se guardaron
        //Coleccion que funciona mas rapido
        Set<String> miSet =  new HashSet<>();
        miSet.add("Juan");
        miSet.add("Pedro");
        miSet.add("Luis");
        miSet.add("Felipe");
        miSet.add("Juan");
        miSet.add("Juan");
        miSet.add("Juan");
        miSet.add("Juan");

        System.out.println(miSet);


        miSet.remove("Felipe");

        System.out.println(miSet);
        System.out.println(miSet.size());
        System.out.println(miSet.contains("Juan"));


    }

}
