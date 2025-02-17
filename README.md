Dividi los decuentos en diferentes clases para poder generar una inyeccion de dependencia dependiendo de la necesidad diaria dando flexibilidad a futuros descuentos.
Tambien agregue una clase de no descuento para que sea la default en caso de que no sea necesario usar algun descuento.
Esto lo aplique tratando de seguien el patron Factory.

Genere un Printer trantando de seguirn el mismo patron Factory y realizando la funcion principal con tipo general para que dentro de cada entidad se genera una funcion print y sea mas facil manenajar como queremos que se imprima la informacion.

Genere un archivo para la entidad Producto esto para generar mayor limpieza y legibilidad al momento de tipar los elementos que entran en nuestro carrito.

Tambien al carrito le agregue dos funciones para poder cambiar de estrategia de descuento y de estrategia de impresion, para mayor flexibilidad por si es necesario cambiar de decuento o imprimierlo de diferente manera.