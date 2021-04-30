#!/bin/bash

busquedaArchivo(){
  salida=""

  for archivo in $(find . -name 'node_modules' -prune -o -name '*.js')
  do
    salida+=$archivo
    salida+=" "
  done
  echo "$salida"
}

jsdoc $(busquedaArchivo)