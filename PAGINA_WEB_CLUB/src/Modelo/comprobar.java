package Modelo;

public class comprobar {
    public static void main(String[]args){
        Conexion c= new Conexion();
        if(c.conectar()!=null){
            System.out.println("conexion correcta");
        }else{
            System.out.println("conexion incorrecta");
        }

    }
   
}
