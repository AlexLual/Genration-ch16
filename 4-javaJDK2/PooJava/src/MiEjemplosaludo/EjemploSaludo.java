package MiEjemplosaludo;

public class EjemploSaludo {
    public static void main(String[] args) {
        Saludo objSaludo;//declarar objeto
        objSaludo= new Saludo();//crear objeto
        objSaludo.saludar();//llamando al metodo

        Saludo objSaludo0 = new Saludo();


        System.out.println(objSaludo.saludar0());
        System.out.println("esto es otro objeto: ->" + objSaludo0.saludar0());
objSaludo.textoS = "Hola";
        System.out.println("objSaludo = " + objSaludo);

objSaludo0.a = 4 ;
        System.out.println("objSaludo0 = " +objSaludo0);
    }
}
