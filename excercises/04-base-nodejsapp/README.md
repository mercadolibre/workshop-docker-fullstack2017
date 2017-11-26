#Ejercicio

Construyamos un entorno de nodejs para nuestra app *nodeapp*

## Como ?

Para esto vamos a tener que instalar nodejs (el instalador esta descargado)

Luego de instalar nodejs tenemos que pensar como queremos armar la imagen, tal vez podemos hacer unos scripts
para que sea sensillo levantarla

La app tiene 3 modos para correrla
- test: corre los tests (hay solo 1 pero funciona !)
- start: levanta la app en el puerto 5000
- start-dev: levanta la app en el puerto 5000 pero ante cualquier cambio baja y levanta el webserver

Para correr cualquiera de estas hay que correr *npm run <modo>*


Para instalar las dependencias hay que correr *npm install*


## Cosas Utiles

- El comando ADD descomprimer solo el tar.gz
- Los binarios los podemos poner en cualquier lado y apuntar PATH=$PATH:binarios
