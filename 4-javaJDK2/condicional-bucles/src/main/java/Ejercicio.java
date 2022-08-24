public class Ejercicio {
    public static void main(String[] args) {
/*
            Problema 1
            La salida tiene que ser la siguiente:
            *
            **
            ***
            ****
            *****

            Problema 2
            *****
            ****
            ***
            **
            *

            Problema 3
            Pedirle al usuario la cantidad de estrellitas y la direccion
        */
        Scanner sc = new
        switch (direccion){
            case "Ascendente":
                for(int i=1; i<=numEstrellas ; i++){
                    for (int j=0; j<i; j++){
                        System.out.print("*");
                    }
                    System.out.println("");
                }
                break;
            case "Descendente":
                for(int i=numEstrellas; i>=1 ; i--){
                    for (int j=0; j<i; j++){
                        System.out.print("*");
                    }
                    System.out.println("");
                }
                break;
            default:
                System.out.println("Opcion no valida");
        }

       /* String ast = "";
        for (int i = 0; i < 5; i++) {
            ast += "*";
            System.out.println(ast);
*/
        }

    }
}
