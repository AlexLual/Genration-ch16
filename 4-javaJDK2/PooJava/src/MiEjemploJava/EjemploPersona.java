package MiEjemploJava;

public class EjemploPersona {
    public static void main(String[] args) {
        Persona p = new Persona ();
        p.setNombre("Pepe");
        p.setEdad(28);
        p.setNss(310067010);
        System.out.println("el valor de la variable de instancia p.nombre -> " + p.getNombre());
        System.out.println("el valor de la variable de instancia p.edad -> " + p.getEdad());
        System.out.println("el valor de la variable de instancia p.nss -> " + p.getNss());

    }
}
