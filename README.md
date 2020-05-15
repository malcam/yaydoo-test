# Scraper

Se requiere un producto que scrape el contenido de la web: [https://www.amazon.com.mx/gp/bestsellers/?ref\_=nav_cs_bestsellers](https://www.amazon.com.mx/gp/bestsellers/?ref_=nav_cs_bestsellers).

Necesitamos almacenar en una base sqlite el contenido de los productos más vendidos tomando en cuenta las siguientes caracteristicas del producto:

- Nombre
- Autor
- Valoración
- Número de valoraciones

Cada uno de los cuales debe estar organizado por categorías, teniendo como resultado de ejemplo algo similar al JSON:

```json
[
  {
    "category": "Libros",
    "products": [
      {
        "id": "968164705X",
        "name": "La peor señora del mundo",
        "author": "Hinojosa hinojosa",
        "coverImage": "https://images-na.ssl-images-amazon.com/images/I/81%2BZzxy9DiL._AC_UL320_SR252,320_.jpg",
        "rating": {
          "total": 392,
          "value": "4.7"
        }
      },
      {
        "id": "8425432022",
        "name": "El hombre en busca de sentido",
        "author": "Viktor Emil Franki",
        "coverImage": "https://images-na.ssl-images-amazon.com/images/I/81D3oOzjGqL._AC_UL480_SR312,480_.jpg",
        "rating": {
          "total": 1242,
          "value": "4.8"
        }
      }
    ]
  },
  {
    "category": "Deportes y Aire Libre",
    "products": [
      ...
    ]
  }
]
```

## Configuración de espacio de trabajo

Se entrega la base de un proyecto en typescript ya con algunas configuraciones que faciliten la implementación del código. No es obligatorio hacer uso de todas las herramientas acá propuestas, pero si es recomendable demostrar conocimiento sobre:

- Patrones de diseño
- SOLID
- TDD
- Buenas prácticas de desarrollo
- Otros que considere aportan valor

## Comando de instalación

Para poder trabajar con el proyecto solo es necesario:

```bash
yarn install
```

```bash
yarn init
```

## Ejecución de pruebas unitarias

```bash
yarn test
```

### Modo watch

```bash
yarn test:watch
```

**Nota 1** Si requieres otro tipo de proveedor de ejecución de pruebas unitarias, siéntete libre de configurarlo.
**Nota 2** No hace falta un alto coverage, solo demostrar que se sabe manejar TDD si este fuese el caso
