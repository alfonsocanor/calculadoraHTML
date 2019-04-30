precio = int(input('Ingrese el precio del producto: '))
print(type(precio))
iva = 21
precioFinal = precio + precio*21/100

print('El precio final es: ' + str(precioFinal))
