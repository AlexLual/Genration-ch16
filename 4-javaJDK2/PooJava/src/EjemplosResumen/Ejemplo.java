package EjemplosResumen;

import EjemplosResumen.Animal; //Importamos la clase Animal para poer usarla

public class Ejemplo
{
    public static void main(String[] args) {
        //Creamos un animal cuyo nombre seara falso
        Animal miAnimal = new Animal("Falco");
        //Le establecemos 3 años de edad a falco
        miAnimal.setEdad(3);
        //Mostramos el nombre del animal por pantalla
        System.out.println("El nombre es: " +miAnimal.getNombre());
        // Mostramos la edad del animal por pantalla
        System.out.println("y tiene"+ miAnimal.getEdad() + "años");
        //Este codigo deberia de imprimir "El nombre falco y tiene 3 años
    }
}


