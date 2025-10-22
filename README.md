# 🤖 SOPHI.A - Infografía Interactiva

**Chatbot Socrático para Orientación Vocacional y Emocional**

Integrando Filosofía Clásica e Inteligencia Artificial para el Bienestar Estudiantil

---

## 📋 Descripción del Proyecto

SOPHI.A es una infografía interactiva desarrollada como parte del curso de **Cibercultura** de la **Universidad Nacional Abierta y a Distancia (UNAD)** en 2025. El proyecto presenta un chatbot innovador basado en inteligencia artificial que utiliza el método socrático para brindar orientación vocacional y emocional a estudiantes en entornos virtuales.

### Características Principales

- ✨ **Diseño moderno** inspirado en Anthropic.com
- 🎨 **8 secciones interactivas** con animaciones suaves
- 📱 **Totalmente responsive** (móvil, tablet, desktop)
- ⚡ **Alto rendimiento** con lazy loading y optimizaciones
- ♿ **Accesible** siguiendo estándares WCAG
- 🌐 **Listo para GitHub Pages** sin configuración adicional

---

## 🗂️ Estructura de Archivos

```
infografiaTarea3CiberculturaSophia/
│
├── index.html              # Página principal HTML5
├── styles.css              # Estilos CSS3 completos
├── script.js               # Funcionalidad JavaScript
├── README.md               # Este archivo
├── .gitignore             # Archivos ignorados por Git
│
└── assets/                 # Recursos del proyecto
    ├── images/            # Imágenes y screenshots
    │   ├── teams-screenshot.jpg
    │   ├── mewe-screenshot.jpg
    │   └── ...
    └── icons/             # Iconos SVG personalizados
        └── ...
```

---

## 🚀 Instalación Local

### Requisitos Previos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, pero recomendado)

### Opción 1: Abrir Directamente

1. Descarga o clona este repositorio
```bash
git clone https://github.com/[tu-usuario]/infografia-sophia.git
cd infografia-sophia
```

2. Abre `index.html` en tu navegador
   - Doble clic en el archivo, o
   - Clic derecho → "Abrir con" → Tu navegador preferido

### Opción 2: Servidor Local (Recomendado)

**Con Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Con Node.js:**
```bash
npx http-server -p 8000
```

**Con PHP:**
```bash
php -S localhost:8000
```

Luego abre: `http://localhost:8000`

---

## 🌐 Despliegue en GitHub Pages

### Paso 1: Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"New"** (nuevo repositorio)
3. Nombre sugerido: `infografia-sophia` o `sophi-a-project`
4. Configura como **Public** (público)
5. **NO** inicialices con README (ya lo tienes)
6. Clic en **"Create repository"**

### Paso 2: Subir Archivos

```bash
# Inicializa Git en tu directorio local
git init

# Añade todos los archivos
git add .

# Crea el primer commit
git commit -m "Initial commit: SOPHI.A interactive infographic"

# Conecta con tu repositorio remoto
git remote add origin https://github.com/[TU-USUARIO]/infografia-sophia.git

# Renombra la rama a 'main'
git branch -M main

# Sube los archivos
git push -u origin main
```

### Paso 3: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Clic en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Clic en **Save**
6. Espera 1-2 minutos

### Paso 4: Acceder a tu Sitio

Tu infografía estará disponible en:
```
https://[TU-USUARIO].github.io/infografia-sophia/
```

🎉 ¡Listo! Comparte el enlace con tu profesor y compañeros.

---

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `styles.css` (líneas 7-18):

```css
:root {
    --primary-blue: #2196F3;      /* Color principal */
    --secondary-green: #4CAF50;   /* Color secundario */
    --accent-purple: #9C27B0;     /* Color de acento */
    --text-dark: #1a1a1a;         /* Texto principal */
}
```

### Cambiar Contenido

1. **Textos:** Edita directamente en `index.html`
2. **Imágenes:** Reemplaza los placeholders en `assets/images/`
3. **Fuentes:** Modifica el enlace de Google Fonts en `index.html` (línea 20)

### Añadir Imágenes de Evidencias

1. Guarda tus screenshots en `assets/images/`:
   - `teams-reunion-1.jpg`
   - `mewe-conversacion-1.jpg`
   - etc.

2. Actualiza `index.html` en la sección de galería:

```html
<div class="gallery-item" data-gallery="1">
    <img src="assets/images/teams-reunion-1.jpg" alt="Reunión Teams">
</div>
```

---

## 💻 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con:
  - CSS Grid & Flexbox
  - Custom Properties (variables)
  - Animaciones y transiciones
  - Media queries para responsive
- **JavaScript ES6+** - Interactividad con:
  - Intersection Observer API
  - Event Delegation
  - Debouncing & Throttling
  - Smooth Scrolling
- **Lucide Icons** - Biblioteca de iconos SVG
- **Google Fonts** - Tipografías Montserrat & Open Sans

---

## ✨ Características Técnicas

### Performance

- ⚡ Lazy loading de imágenes
- 🎯 Intersection Observer para animaciones
- 🚀 Throttling en scroll events
- 📦 CSS optimizado con variables
- 🔧 JavaScript modular y eficiente

### Accesibilidad

- ♿ Navegación por teclado
- 🎯 ARIA labels y roles semánticos
- 🔍 Alto contraste de colores
- 📱 Diseño responsive mobile-first
- 🖱️ Focus visible en elementos interactivos

### Compatibilidad

| Navegador | Versión Mínima |
|-----------|----------------|
| Chrome    | 90+            |
| Firefox   | 88+            |
| Safari    | 14+            |
| Edge      | 90+            |

---

## 📝 Secciones de la Infografía

1. **🏠 Portada** - Introducción al proyecto con datos clave
2. **📖 Introducción** - Contexto y solución propuesta
3. **❓ Planteamiento del Problema** - Situación actual y pregunta de investigación
4. **✅ Justificación** - 4 tarjetas interactivas con argumentos
5. **🎯 Objetivos** - Objetivo general y 4 específicos en timeline
6. **👥 Trabajo Colaborativo** - Herramientas y evidencias del trabajo en equipo
7. **📚 Referencias** - Bibliografía en formato APA 7
8. **📄 Cierre** - Información institucional y contacto

---

## 👥 Autores

**Andrés Eduardo Muñoz Roa**
- Rol: Investigación filosófica, diseño del modelo conversacional socrático, desarrollo de contenidos
- Institución: Universidad Nacional Abierta y a Distancia (UNAD)

**David Emilio Sierra Puentes**
- Rol: Análisis de necesidades estudiantiles, implementación técnica, evaluación de impacto
- Institución: Universidad Nacional Abierta y a Distancia (UNAD)

---

## 📜 Licencia

Este proyecto es de uso académico para el curso de Cibercultura de la UNAD (2025).

**Licencia:** Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)

Eres libre de:
- ✅ Compartir — copiar y redistribuir el material
- ✅ Adaptar — remezclar y transformar el material

Bajo las siguientes condiciones:
- 👤 Atribución — Debes dar crédito apropiado
- 🚫 NoComercial — No puedes usar para fines comerciales

---

## 🐛 Solución de Problemas

### Las animaciones no funcionan

- Verifica que JavaScript esté habilitado en tu navegador
- Abre la consola del navegador (F12) y busca errores
- Asegúrate de que `script.js` esté cargando correctamente

### Los iconos no se muestran

- Verifica tu conexión a internet (Lucide Icons usa CDN)
- Revisa que el script de Lucide esté antes del cierre de `</body>`

### El sitio no se ve bien en móvil

- Limpia la caché de tu navegador
- Verifica que `styles.css` esté cargando
- Prueba en modo incógnito

### GitHub Pages no muestra el sitio

- Espera 2-5 minutos después de activar Pages
- Verifica que el archivo se llame exactamente `index.html`
- Revisa la configuración en Settings > Pages

---

## 📞 Soporte

Si tienes preguntas sobre el proyecto:

1. Revisa este README completo
2. Consulta la documentación en el código (comentarios)
3. Contacta a los autores a través de la plataforma UNAD

---

## 🎓 Contexto Académico

**Curso:** Cibercultura  
**Programa:** Universidad Nacional Abierta y a Distancia (UNAD)  
**Año:** 2025  
**Tipo de trabajo:** Proyecto final - Tarea 3

---

## 🙏 Agradecimientos

- **UNAD** por la formación en competencias digitales
- **Anthropic** por la inspiración en diseño
- **Lucide Icons** por la biblioteca de iconos
- **Google Fonts** por las tipografías

---

## 📅 Historial de Versiones

- **v1.0.0** (Octubre 2025) - Versión inicial
  - Implementación completa de las 8 secciones
  - Diseño responsive
  - Animaciones e interactividad
  - Documentación completa

---

## 🔗 Enlaces Útiles

- [GitHub Pages Documentation](https://docs.github.com/es/pages)
- [MDN Web Docs](https://developer.mozilla.org/es/)
- [Lucide Icons](https://lucide.dev/)
- [Google Fonts](https://fonts.google.com/)
- [UNAD Virtual](https://campus.unad.edu.co/)

---

<div align="center">

### ⭐ Si te gustó este proyecto, dale una estrella en GitHub ⭐

**Hecho con ❤️ para la comunidad UNAD**

[🏠 Inicio](#-sophia---infografía-interactiva) | [📚 Documentación](#-secciones-de-la-infografía) | [🚀 Deploy](#-despliegue-en-github-pages)

</div>
