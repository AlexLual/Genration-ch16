package MiFecha;

public class Fecha
{
    private int Dia;
    private int Mes;
    private int Año;

    //Set
    public void setDia (int Dia){this.Dia = Dia;}
    public void setMes(int Mes){this.Mes = Mes;}
    public void  setAño(int Año){this.Año = Año;}

    //Get
    public int getDia(){return Dia;}
    public int getMes(){return Mes;}
    public int getAño() {return Año;}

    public String formaF(){
    return ""+getDia() +"/"+getMes()+"/" +getAño();


    }
}
