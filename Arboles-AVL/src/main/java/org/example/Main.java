package org.example;

public class Main {
    public static void main(String[] args) {
        Arbol arbol = new Arbol(6);
        arbol.insertar(3);
        arbol.insertar(4);
        arbol.imprimir(arbol);
    }
}