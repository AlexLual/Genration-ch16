public class EjemploSaludo {
    public static void main(String[] args) {
        Saludo objSaludo;//declarar objeto
        objSaludo= new Saludo();//crear objeto
        objSaludo.saludar();//llamando al metodo

        Saludo objSaludo0 = new Saludo();


        System.out.println(objSaludo.saludar0());
        System.out.println("esto es otro objeto: ->" + objSaludo0.saludar0());

    }
}
