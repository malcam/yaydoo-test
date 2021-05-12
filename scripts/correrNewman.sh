#!/bin/sh

# UUIDs de las colecciones respectivas
coleccion='7764640-33549550-ed22-4763-bb8f-b58752ce7611' # Es la colección de Monitor Nuevo Usuario
apikey='PMAK-609c5ce9298e2d00516ac447-d319d4d0f17e8a9e8dcaf161f8bab17263' # Generé la API Key nueva para probar
entorno='7764640-ba70ed20-1280-484a-8ad5-6b8ced0f434d' # Es el entorno de Stage - PorCobrar

# URLs para hacer comprensible el script
URLcoleccion=https://api.getpostman.com/collections/$(echo $coleccion)?apikey=$(echo $apikey)
URLentorno=https://api.getpostman.com/environments/$(echo $entorno)?apikey=$(echo $apikey)

echo "Ejecutando las pruebas de postman..."
echo "Esto puede demorar unos minutos dependiendo del servidor!"

newman run $(echo $URLcoleccion) -e $(echo $URLentorno)>>/dev/null

if [ $? -eq 0 ]
then
  echo "Las pruebas se ejecutaron con éxito"
else
  echo "Las pruebas han fallado"
fi