import math

'''distancias = []

def distanciaMedia(distancias):
    totalDistancias = distancias.length
    sumaTotal = 0
    for d in distancias:
        sumaTotal+=d
    mediaDeLasDistancias = sumaTotal/totalDistancias

def distanciaEntrePuntos(x1,x2,y1,y2):
    distancia = math.sqrt(math.pow((x2-x1),2) + math.pow((y2-y1),2) )
    return distancias.append(distancia)'''

palabra = 'abccba'
condicionalBarridoCreciente = 0
condicionalBarridoDecreciente = len(palabra) - 1
condicionalCambioDeLetra = 0
validarCambioDeLetra = True
mensaje = ''

def esCasiPalindromo(palabra):
    condicionalCambioDeLetra = 0
    for i in palabra:
        if(len(palabra) == len(palabra) - palabra.index(i)):
            condicionalBarridoDecreciente = len(palabra) - 1
        else:
            condicionalBarridoDecreciente = len(palabra) - palabra.index(i)
        if(palabra.index(i) < condicionalBarridoDecreciente):
            if(palabra[palabra.index(i)] == palabra[condicionalBarridoDecreciente]):
                print('')
            else:
                condicionalCambioDeLetra+=1
                if(condicionalCambioDeLetra == 1):
                    return 'la palabra es palindromo si es modifica la letra {}'.format(palabra[condicionalBarridoCreciente])    
                if(condicionalCambioDeLetra == 2):
                    return 'La palabra no es palindromo'
        else:
            return 'Es palidromo'

esCasiPalindromo('abccba')