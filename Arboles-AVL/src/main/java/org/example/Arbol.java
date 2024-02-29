package org.example;

import java.util.Arrays;

public class Arbol {
    int dato, alt, peso;
    Arbol derecho, izquierdo;
    public Arbol(int dato){
        this.dato = dato;
        alt = 0;
        peso = 0;
    }
    public void insertar(int dato){
        Arbol nodo = this;
        boolean insertado = false;
        while(!insertado){
            if(dato < nodo.dato){
                if(nodo.izquierdo == null) {
                    nodo.izquierdo = new Arbol(dato);
                    insertado = true;
                }
                else {
                    nodo = nodo.izquierdo;
                }
            }
            if(dato > nodo.dato){
                if(nodo.derecho == null) {
                    nodo.derecho = new Arbol(dato);
                    insertado = true;
                }
                else {
                    nodo = nodo.derecho;
                }
            }
        }
        calcularAlturas(this);
        System.out.println("nueva iteracion");
        calcularPesos(this);

    }
    public int calcularAlturas(Arbol nodo){
        int alturaI = 0;
        int alturaD = 0;
        if(nodo.izquierdo == null && nodo.derecho == null){
            nodo.alt = 1;
            return nodo.alt;
        }else {
            if(nodo.izquierdo != null){
                alturaI = calcularAlturas(nodo.izquierdo);
            }
            if(nodo.derecho != null){
                alturaD = calcularAlturas(nodo.derecho);
            }
            nodo.alt = 1 + Math.max(alturaI,alturaD);
            return nodo.alt;
        }
    }
    public void calcularPesos(Arbol nodo){
        int peso = 0;
        int alturaI = 0;
        int alturaD = 0;
        if(nodo.izquierdo == null && nodo.derecho == null){
            nodo.peso = peso;
        }else{
            if(nodo.izquierdo != null){
                calcularPesos(nodo.izquierdo);
                alturaI = nodo.izquierdo.alt;
            }
            if(nodo.derecho != null){
                calcularPesos(nodo.derecho);
                alturaD = nodo.derecho.alt;
            }
            if(alturaI == alturaD) nodo.peso = 0;
            else if(alturaI + 1 == alturaD) nodo.peso = 1;
            else if(alturaI == alturaD + 1) nodo.peso = -1;
            else if(alturaD > alturaI) {
                nodo.peso = 2;
                if(nodo.derecho.peso > 0) rotSI(nodo);
                else rotDD(nodo);
            }
            else {
                nodo.peso = -2;
                if(nodo.izquierdo.peso < 0 ) nodo = rotSD(nodo);
                else rotDI(nodo);
            }
        }
        // System.out.println(Arrays.toString(new int[]{nodo.peso, nodo.alt,nodo.dato}));
    }
    public Arbol rotSD(Arbol nodo){
       Arbol nodoI = nodo.izquierdo;
       Arbol aux = nodoI.derecho;
       nodoI.derecho = nodo;
       nodo.izquierdo = aux;
       return aux;
    }
    public void rotSI(Arbol nodo){
        Arbol nodoI = nodo.derecho;
        Arbol aux = nodo;
        nodo = nodoI;
        if (nodo.izquierdo == null){
            nodo.izquierdo = aux;
            aux.derecho = null;
        } else{
            aux.derecho = nodo.izquierdo;
            nodo.izquierdo = aux;
        }
    }
    public void rotDD(Arbol nodo){
        Arbol nodoI = nodo.izquierdo;
        Arbol nodoID = nodoI.derecho;
        if(nodoID.izquierdo == null){
            Arbol aux = nodoI;
            nodoI = nodoID;
            nodoI.izquierdo = aux;
            aux.derecho = null;
            rotSD(nodo);
        }else{
            Arbol aux = nodoI;
            nodoI = nodoID;
            nodoI.izquierdo.izquierdo = aux;
            aux.derecho = null;
            rotSD(nodoI.izquierdo);
            rotSD(nodo);
        }
    }
    public void rotDI(Arbol nodo){
        Arbol nodoD = nodo.derecho;
        Arbol nodoDI = nodoD.izquierdo;
        if(nodoDI.derecho == null){
            Arbol aux = nodoD;
            nodoD = nodoDI;
            nodoD.derecho = aux;
            aux.izquierdo = null;
            rotSI(nodo);
        }else{
            Arbol aux = nodoD;
            nodoD = nodoDI;
            nodoD.derecho.derecho = aux;
            aux.izquierdo = null;
            rotSD(nodoD.derecho);
            rotSD(nodo);
        }
    }
    public void imprimir(Arbol nodo){
        System.out.print(nodo.dato);
        if(nodo.izquierdo != null) imprimir(nodo.izquierdo);
        if(nodo.derecho != null) imprimir(nodo.derecho);
    }
}
