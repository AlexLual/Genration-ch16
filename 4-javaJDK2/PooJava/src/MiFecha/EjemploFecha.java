package MiFecha;

public class EjemploFecha {

    public static void main(String[] args) {
        Fecha objF = new Fecha();
        objF.setDia(14);
        objF.setMes(8);
        objF.setAño(22);
        System.out.println(objF.formaF());
    }
}
