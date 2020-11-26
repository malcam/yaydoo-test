# Scraper

producto que scrape el contenido de la web: [https://www.amazon.com.mx/gp/bestsellers/?ref\_=nav_cs_bestsellers](https://www.amazon.com.mx/gp/bestsellers/?ref_=nav_cs_bestsellers).

## Comando de instalación

Para poder trabajar con el proyecto solo es necesario:

```bash
npm install
```

```bash
npm run start 
```

Developer mode:

```bash
npm run dev 
```


## Ejecución de pruebas unitarias

```bash
npm run test
```

Se utilizo la libreria puppeteer para extraer la información de la página web con la cual sacará una fotografía de la página en el momento de extraer la información.


## Rutas:

Ruta para extraer la información del sistio web y guardarlo en la base de datos.

```bash
http://localhost:3000/api/init
```

Ruta para obtener la información guardada.

```bash
http://localhost:3000/api/products
```
