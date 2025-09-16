# Ejercicio 14: Envolturas Semánticas HTML5

## Objetivo

El objetivo de este ejercicio es crear dos páginas HTML que demuestren el uso correcto de las envolturas semánticas de HTML5. Aprenderás a estructurar documentos web utilizando elementos semánticos para mejorar la accesibilidad y el SEO.

## 🎯 Conceptos a evaluar:

- Uso de elementos semánticos HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Estructura semántica apropiada
- Organización lógica del contenido
- Navegación entre páginas usando rutas relativas
- Consistencia en la navegación entre todas las páginas
- Buenas prácticas de HTML semántico

### Documentación
[Material didáctico sobre HTML Semántico](https://developer.mozilla.org/es/docs/Web/HTML/Element)

## Instrucciones

1. Este ejercicio se creará dentro de la carpeta `docs/ejercicio-14` (crear si no existe).

2. Crear tres archivos HTML con estructura semántica completa:
   - `index.html` - Página principal con enlaces a las demás páginas
   - `blog.html` - Una página de blog
   - `empresa.html` - Una página corporativa

### Requisitos para `index.html`:

3. **Estructura semántica requerida**:
   - `<header>`: Debe contener el título del sitio y navegación principal
   - `<nav>`: Menú de navegación con enlaces a todas las páginas
   - `<main>`: Contenido principal de la página de inicio
   - `<section>`: Al menos 2 secciones con información sobre el sitio
   - `<aside>`: Información complementaria o enlaces útiles
   - `<footer>`: Pie de página con información de contacto

4. **Contenido mínimo requerido**:
   - Título del sitio en el header
   - Navegación con enlaces: Inicio, Blog, Empresa
   - Sección de bienvenida con descripción del sitio
   - Sección con enlaces a las páginas principales
   - Barra lateral con información adicional
   - Footer con información de derechos de autor

### Requisitos para `blog.html`:

5. **Estructura semántica requerida**:
   - `<header>`: Debe contener el título del blog y navegación principal
   - `<nav>`: Menú de navegación con enlaces a todas las páginas
   - `<main>`: Contenido principal de la página
   - `<section>`: Al menos 2 secciones dentro del main
   - `<article>`: Al menos 2 artículos de blog
   - `<aside>`: Barra lateral con información complementaria
   - `<footer>`: Pie de página con información de contacto

6. **Contenido mínimo requerido**:
   - Título del blog en el header
   - Navegación con enlaces: Inicio, Blog, Empresa
   - 2 artículos con título, fecha y contenido
   - Barra lateral con "Artículos recientes" y "Categorías"
   - Footer con información de derechos de autor

### Requisitos para `empresa.html`:

7. **Estructura semántica requerida**:
   - `<header>`: Logo de la empresa y navegación
   - `<nav>`: Menú principal con enlaces a todas las páginas
   - `<main>`: Contenido principal
   - `<section>`: Al menos 3 secciones (Servicios, Acerca de, Contacto)
   - `<aside>`: Información adicional o testimonios
   - `<footer>`: Información de contacto y enlaces sociales

8. **Contenido mínimo requerido**:
   - Nombre de la empresa en el header
   - Navegación con: Inicio, Blog, Empresa
   - Sección de servicios con al menos 3 servicios
   - Sección "Acerca de" con información de la empresa
   - Sección de contacto con dirección y teléfono
   - Aside con testimonios de clientes
   - Footer con redes sociales y copyright

### Estructura de carpetas esperada:
```
docs/ejercicio-14/
├── index.html
├── blog.html
└── empresa.html
```

### Requisitos de navegación:

9. **Todos los archivos deben tener navegación consistente**:
   - Cada página debe incluir enlaces a las otras dos páginas
   - Los enlaces deben usar rutas relativas correctas:
     - `index.html` (para la página principal)
     - `blog.html` (para la página del blog)
     - `empresa.html` (para la página de la empresa)
   - La navegación debe estar dentro del elemento `<nav>`

10. **Buenas prácticas a aplicar**:
   - Usar elementos semánticos apropiados para cada tipo de contenido
   - Mantener una jerarquía lógica de encabezados (h1, h2, h3)
   - Incluir atributos `lang` en el elemento html
   - Usar texto descriptivo y significativo

## Verificación

Puedes verificar la estructura de archivos ejecutando:

```bash
ls -la docs/ejercicio-14/
```

## Entrega

Una vez que hayas completado el ejercicio ejecuta:
```bash
npm test ejercicio/14
```
Si pasa todos los test, haz commit de tus cambios y súbelos a tu repositorio de GitHub. Asegúrate de probar tus páginas HTML en un navegador web para verificar que todo se muestre correctamente y que la estructura semántica sea apropiada.

¡Buena suerte y diviértete programando!
