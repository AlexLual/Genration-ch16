import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Diccionario {
            public static void main(String[] args) {
                Map<String, String> inglesEspanol = new HashMap<String,String>();
                inglesEspanol.put("Run","Correr");
                inglesEspanol.put("Play","Jugar");
                inglesEspanol.put("Jump","Saltar");
                inglesEspanol.put("Fly","Volar");
                inglesEspanol.put("Sing","Cantar");
                inglesEspanol.put("Dance","Bailar");
                inglesEspanol.put("Read","Leer");
                inglesEspanol.put("Take","Tomar");
                inglesEspanol.put("Scream","Gritar");
                inglesEspanol.put("Walk","Caminar");
                inglesEspanol.put("Drink","Beber");
                inglesEspanol.put("Talk","Hablar");
                inglesEspanol.put("Eat","Comer");
                inglesEspanol.put("Wake-up","Despertar");
                inglesEspanol.put("Greet","Saludar");
                inglesEspanol.put("Fix","Arreglar");
                inglesEspanol.put("Push","Empujar");
                inglesEspanol.put("Drive","Manejar");
                inglesEspanol.put("Forgot","Olvidar");
                inglesEspanol.put("Program","Programar");


                System.out.println("Escribe la palabra en Inglés:");
                Scanner sc = new Scanner(System.in);
                String respuesta = sc.nextLine();
                String traduccion = inglesEspanol.get(respuesta);
                System.out.println(traduccion);

            }
        }




/*  Crear una clase llamada Diccionario
        *  Crear un programa en Java que realice lo siguiente:
        *  Crear un diccionario Español-Inglés, que contenga al menos 20 palabras (con traducción).
        *  Utilizar un objeto HashMap para almacenar los pares de palabras.
        *  Escoger al azar 5 palabras del mini diccionario.
        *  Pedir al usuario que teclee la palabra en inglés y que se imprima la traducción
        *
        *
        *
        * Extra:
        *  Pedir al usuario que teclee la traducción al inglés de cada una de las palabras y comprobará si son correctas.
        *  Al final debe mostrar por consola cuántas respuestas correctas e incorrectas tiene el usuario.

         */
