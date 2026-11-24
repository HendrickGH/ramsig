# Auditoría Técnica y de Marca — RAMSIG Seguridad Privada (`https://www.ramsigseguridad.com/`)

**Fecha de evaluación:** 2026-11-24  
**Última modificación registrada en sitemap (`pages-sitemap.xml`):** 2026-10-12  
**Plataforma detectada:** Wix (`<meta name="generator" content="Wix.com Website Builder">`)  
**Cobertura:** 6 rutas indexadas (`/`, `/acercade`, `/guardiaintramuro`, `/custodias`, `/monitoreo`, `/contacto`) en escritorio (`1440x900`) y móvil (`390x844`)

---

## 1. Resumen Ejecutivo

El sitio web vigente en `https://www.ramsigseguridad.com/` **no representa adecuadamente a RAMSIG Seguridad Privada** frente a compradores corporativos B2B de los sectores **Industria**, **Obras de Construcción** y **Parques Logísticos**, ni transmite la sobriedad institucional de su emblema negro y dorado.

Aunque la empresa cuenta con capacidad operativa comprobable (más de 600 empleos generados, más de 40 sitios activos, 5 sedes estatales y cobertura en guardia intramuros, monitoreo 24/7 y custodias de mercancía), la presencia digital actual diluye esa autoridad por cinco razones estructurales:

1. **Desconexión total de marca:** Se apoya en una plantilla genérica de Wix de fondo blanco (`#FFFFFF` / `#F2F2F2`) con variables residuales en rojo y azul corporativo ajeno (`#ED1C24`, `#1A2B6D`, `#00ADEF`, `#116dff`) y un video aéreo residencial en la cabecera, contradiciendo la identidad táctica negro y dorado del escudo institucional (`90x73px` aislado en una barra blanca).
2. **Arquitectura rota y SEO deficiente:** Faltan encabezados `<h1>` en 5 de las 6 páginas (incluida la página principal `/`), falta `<meta name="description">` en `/monitoreo`, dos ítems del menú superior (`Servicios` y `Bolsa de Trabajo`) apuntan a `/` sin destino funcional, y el pie de página (`<footer id="SITE_FOOTER">`) está completamente vacío.
3. **Inaccesibilidad móvil y fallos de contraste:** 16 reglas CSS con `min-width:980px` y contenedores de ancho fijo (`897px` y `930px`) generan desbordamiento horizontal severo en `390x844`, mientras el dorado `#D0B368` sobre `#FFFFFF` (`2.03:1`) y el gris `#999997` (`2.85:1`) incumplen WCAG 2.1 AA.
4. **Fricción crítica en confianza B2B y datos de contacto:** El enlace visible de correo en `/contacto` apunta en su atributo `href` a la plantilla sin editar `mailto:info@misitio.com`; coexisten direcciones inconsistentes (`administracion@` vs `ventas@`); la dirección aparece truncada (`"Naucalpan de Juá"`); el teléfono `55 3557 8304` no utiliza enlace `tel:`; el horario `Lunes a Viernes 9:00-18:00` contradice sin aclaración la operación `24/7`; y no existe ninguna mención a credenciales regulatorias (`REPSE`, `SSPC`, `DGSP`) ni `Aviso de Privacidad`.
5. **Embudo de conversión indiferenciado:** Todos los formularios tienen 4 campos genéricos que mezclan solicitudes de cotización empresarial con postulaciones laborales (`Únete a nuestro equipo`), sin campo de empresa, teléfono, servicio ni sector objetivo.

---

## 2. Metodología y Alcance Técnico

La auditoría se ejecutó mediante inspección combinada de código fuente HTML/CSS en producción y evaluación visual/funcional en escritorio (`1440x900`) y móvil (`390x844`):

- **Inventario de rutas:** Extracción directa de `https://www.ramsigseguridad.com/pages-sitemap.xml` (`generatedBy="WIX"`, `<lastmod>2026-10-12</lastmod>`), confirmando respuesta `HTTP 200` en las 6 rutas indexadas: `/`, `/acercade`, `/guardiaintramuro`, `/custodias`, `/monitoreo` y `/contacto`.
- **Inspección estructural HTML/CSS:** Análisis de etiquetas semánticas (`<title>`, `<h1>`, `<h2>`, `<meta name="description">`), estructura de `<nav>` y `<footer id="SITE_FOOTER">`, variables CSS (`--color_*`, `--font_*`), reglas responsivas y atributos de formularios/enlaces.
- **Evaluación de contraste WCAG 2.1:** Cálculo matemático de luminancia relativa entre los colores de texto/acento declarados en CSS/HTML y sus fondos reales.
- **Evaluación de UX/UI y medios:** Verificación de renderizado en `1440x900` y `390x844`, inventario de activos gráficos alojados en `static.wixstatic.com` y consistencia editorial del discurso B2B.

---

## 3. Hallazgos de Arquitectura de Información, Navegación y SEO

### 3.1 Matriz completa de las 6 rutas indexadas

| Ruta | HTTP | `<title>` observado (verbatim) | `<h1>` | `<h2>` observados (verbatim) | `<meta name="description">` | Correo / `href` observado |
|---|---|---|---|---|---|---|
| `/` | 200 | `Ramsig Seguridad Privada` | Ninguno (0) | `Bienvenido/a a RAMSIG Seguridad Privada`, `Acerca de nosotros.`, `Nuestros servicios`, `Presencia nacional.`, `Un poco de nuestro impacto`, `Únete a nuestro equipo`, `Contacto` | Presente | `administracion@ramsigseguridad.com` (`mailto:administracion@ramsigseguridad.com`) |
| `/acercade` | 200 | `Acerca de \| Ramsig Seguridad Privada` | `Acerca de RAMSIG Seguridad Privada` | `Misión`, `Visión` | Presente | Ninguno |
| `/guardiaintramuro` | 200 | `Guardia Intramuro \| Ramsig Seguridad Privada` | Ninguno (0) | `Guardia Intramuros.`, `Contáctanos.` | Presente | `ventas@ramsigseguridad.com` (`mailto:ventas@ramsigseguridad.com`) |
| `/custodias` | 200 | `Custodias \| Ramsig Seguridad Privada` | Ninguno (0) | `Custodias.`, `Contáctanos.` | Presente | `ventas@ramsigseguridad.com` (`mailto:ventas@ramsigseguridad.com`) |
| `/monitoreo` | 200 | `Monitoreo \| Ramsig Seguridad Privada` | Ninguno (0) | `Monitoreo 24/7.`, `Contáctanos.` | **Ausente** (tampoco hay `og:description` ni `twitter:description`) | `ventas@ramsigseguridad.com` (`mailto:ventas@ramsigseguridad.com`) |
| `/contacto` | 200 | `Contacto \| Ramsig Seguridad Privada` | Ninguno (0) | `Contáctanos` | Presente | Texto visible: `administracion@ramsigseguridad.com` / **`href="mailto:info@misitio.com"`** |

### 3.2 Defectos críticos de jerarquía semántica y SEO

1. **Ausencia de `<h1>` en 5 de 6 páginas:** Solo `/acercade` incluye un `<h1>` (`Acerca de RAMSIG Seguridad Privada`). La página principal `/` y las tres páginas comerciales de servicio (`/guardiaintramuro`, `/custodias`, `/monitoreo`) más `/contacto` carecen por completo de `<h1>` (`0` etiquetas), delegando los títulos principales a `<h2>`. Esto debilita la jerarquía documental para lectores de pantalla y motores de búsqueda.
2. **Falta de metadescripción en `/monitoreo`:** Es la única ruta sin `<meta name="description">`, `og:description` ni `twitter:description`, dejando los fragmentos en buscadores y redes sociales sin resumen comercial del servicio de Centro de Monitoreo 24/7.
3. **Nota de reconciliación sobre `/guardiaintramuro` (`<title>` vs `<h2>`):**
   - En la revisión previa de escritorio/móvil (`sentinel`), la ruta `/guardiaintramuro` llegó a presentar el `<title>` erróneo `"Custodias | Ramsig Seguridad Privada"`.
   - En el HTML servido en producción posteriormente (con `pages-sitemap.xml` marcado `lastmod: 2026-10-12`), el `<title>` observado es `"Guardia Intramuro | Ramsig Seguridad Privada"`, lo que indica una corrección parcial en Wix. No obstante, persiste la **inconsistencia singular/plural** frente a la URL (`/guardiaintramuro`), el menú (`Guardia Intramuro`) y el encabezado `<h2>` visible (`"Guardia Intramuros."`).
4. **Puntuación editorial irregular en encabezados:** Los títulos alternan arbitrariamente entre incluir o omitir punto final sin criterio uniforme: `"Acerca de nosotros."`, `"Nuestros servicios"`, `"Presencia nacional."`, `"Un poco de nuestro impacto"`, `"Únete a nuestro equipo"`, `"Contacto"`, `"Guardia Intramuros."`, `"Custodias."`, `"Monitoreo 24/7."`.

### 3.3 Navegación superior rota y pie de página vacío

- **Menú superior (`<nav id="comp-j6gqwjnfnavContainer">`):**
  - `Inicio` apunta a `https://www.ramsigseguridad.com`.
  - `Acerca de` apunta a `https://www.ramsigseguridad.com/acercade`.
  - `Servicios` (`id="comp-j6gqwjnf2"`) apunta directamente a `href="https://www.ramsigseguridad.com"` (`data-anchor="dataItem-j6utb6th"`). Las subpáginas (`Guardia Intramuro`, `Monitoreo`, `Custodias`) están ocultas dentro de un submenú secundario (`<button aria-label="Más páginas de Servicios">` con `<ul aria-hidden="true" style="display:none">`), de modo que hacer clic en `"Servicios"` recarga o redirige al inicio en lugar de abrir un índice de servicios.
  - `Bolsa de Trabajo` (`id="comp-j6gqwjnf3"`) apunta igualmente a `href="https://www.ramsigseguridad.com"` (`data-anchor="anchors-m4hlsfdd3"`), sin ruta dedicada ni aterrizaje funcional desde subpáginas.
  - `Contacto` apunta a `https://www.ramsigseguridad.com/contacto`.
- **Pie de página (`<footer id="SITE_FOOTER">`) completamente vacío:** El contenedor interno `<div data-mesh-id="SITE_FOOTERinlineContent-gridContainer" data-testid="mesh-container-content"></div>` no contiene texto ni elementos (`0` enlaces de navegación, `0` menciones de copyright `©`, `0` datos de contacto y `0` acceso a Aviso de Privacidad). Para un proveedor de seguridad privada corporativa, un pie de página vacío proyecta abandono técnico y falta de respaldo legal.

---

## 4. Hallazgos Visuales, de Marca, Tipografía y UX/Móvil

### 4.1 Desconexión cromática e identidad de marca

El logotipo oficial de RAMSIG consiste en un escudo geométrico negro/gris carbón (`#282828` / `#4B4B4B`) con un ala estilizada en dorado metálico (`#C7AA64` / `#CFB273`), tipografía dorada `"RAMSIG"` y subtítulo `"SEGURIDAD PRIVADA"` (`#2B292B`). Sin embargo, el sitio en Wix lo contradice en toda la interfaz:

- **Fondos claros genéricos:** Predominan `--color_11` / `--color_36` (`#FFFFFF`) y `--color_12` (`#F2F2F2`, percibido como `#F5F5F5`).
- **Colores residuales de plantilla Wix activos en CSS:** Permanecen declarados y vinculados en hoja de estilos los tonos rojo `--color_3` (`#ED1C24`), `--color_18` (`#D41317`), azul marino `--color_24` (`#1A2B6D`, asignado por defecto a las clases tipográficas base `.font_0` a `.font_6`), `--color_25` (`#0D1637`), cian `--color_28` (`#00ADEF`), naranja `--color_33` (`#E28636`), el anillo de foco nativo de Wix `#116dff` (`outline:2px solid #116dff`), y el azul marino `#161C2D` observado en elementos renderizados.
- **Logotipo disminuido y aislado:** En la cabecera (`img_comp-m49gy5ii`), el archivo `RAMSIG sin fondo-removebg-preview.png` se renderiza a `90x73px` sobre una barra blanca desprovista de contraste temático, perdiendo presencia ejecutiva y desconectándose de la sobriedad negra y dorada requerida.
- **Dorado aislado sin sistema:** El dorado `#D0B368` (y `#C6A969` en muestreo visual de botones/gráficos) aparece de forma puntual en tres botones (`#comp-m4m0men3`, `comp-m4aal9z5`, `#comp-m4c0ekyb`) y en un título inline, sin integrarse a una jerarquía tonal oscura.

### 4.2 Fallos verificados de contraste (WCAG 2.1)

| Elemento / Token | Primer plano | Fondo | Relación calculada | Resultado WCAG 2.1 |
|---|---|---|---|---|
| Título `"Nuestras sedes actuales."` (inline CSS) | `#D0B368` | `#FFFFFF` | **2.03:1** | Reprobado (AA exige 4.5:1 normal / 3.0:1 grande) |
| Texto secundario `--color_14` (`--wst-color-text-secondary`) | `#999997` | `#FFFFFF` | **2.85:1** | Reprobado |
| Dorado muestreado en componentes claros | `#C6A969` | `#FFFFFF` | **2.26:1** | Reprobado |

**Nota de reconciliación sobre la métrica `+2.5M`:** En el HTML inicial servido por el servidor (SSR), las cifras de impacto (`+600` a `+2.5M`) declaran `color:#000000` dentro de un bloque `<fluid-columns-repeater style="visibility:hidden">`. En la inspección visual en navegador tras la hidratación y animaciones de desplazamiento (`sentinel`), la métrica `+2.5M` se percibió con contraste deficiente sobre fondo claro; sumado a la falla verificada de `#D0B368` (`2.03:1`) y `#999997` (`2.85:1`) sobre blanco, se confirma fragilidad sistemática de legibilidad en el diseño actual.

### 4.3 Fragmentación tipográfica

El sitio mezcla **cinco o más familias tipográficas** distintas sin cohesión editorial:
- `spinnaker,sans-serif` (`--font_0`, `--font_2`–`--font_6`)
- `din-next-w01-light,sans-serif` (`--font_1`, `--font_10`)
- `helvetica-w01-light,sans-serif` (`--font_7`–`--font_9`)
- `'avenir-lt-w01_35-light1475496'` (`avenir-lt-w05_35-light.woff2` en formularios y páginas de servicio)
- Respaldos mezclados inline: `Arial, Helvetica, sans-serif` e incluso tipografía japonesa de plantilla (`メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif`).

### 4.4 Ruptura en móvil (`390x844`) y defectos de layout

- **Causa raíz de desbordamiento horizontal:** Las hojas de estilo generadas por Wix (`compCssMappers_c1dmp`, `compCssMappers_devgo`) imponen **16 reglas `min-width:980px`** sobre secciones principales y franjas de columnas (`#comp-m4tievdn`, `#comp-m4tj08cb`, `#comp-m4hlsfae`, `#comp-m47uy4o7`, `#comp-m4hlsfae1`, `#comp-m4a9oanc2`, `#comp-m65exos9`, `#comp-m65exote1`, `#comp-m4hlsfaf1`, `#comp-m4hl73ix`, `#comp-m4hlsfaf2`, `#comp-m4c0ekxy`, `#comp-m4hlsfaf3`, `#comp-m4oktqpi`, `#comp-m4oktqq2`), además de anchos fijos de píxeles en bloques clave (`#comp-m4titcp5{width:897px}`, `#comp-m4c0yrz3{width:930px}`).
- **Impacto en `390x844`:** En viewport móvil, la cabecera, el hero y las tarjetas exceden ampliamente los `390px` generando desplazamiento horizontal severo, y no existe un menú hamburguesa funcional para dispositivos pequeños.
- **Mapa obstruido:** En la sección de ubicación, un bloque superpuesto en azul oscuro tapa aproximadamente el **60 %** del componente embebido de Google Maps, impidiendo visualizar con claridad los accesos viales en Naucalpan.

### 4.5 Activos multimedia y fotografía operativa

- **Hero con video aéreo residencial (`<wix-video id="videoContainer_comp-m4tievdn">`):** Reproduce un video `1920x1080` (`b2d26d_36317f413c424e06838e901dee048465`) con tomas aéreas residenciales que carecen de relación con vigilancia industrial, protección de obra o logística de carga.
- **Captura de pantalla como banner en `/custodias`:** El encabezado principal de `/custodias` utiliza un archivo subido directamente desde macOS con nombre de captura de pantalla (`Captura de pantalla 2025-01-07 a la(s) 17_44_52.png`), recortado a `980x372px`, lo cual resulta impropio para un servicio de escolta y custodia de mercancías de alto valor.
- **Fotografía operativa real desaprovechada:** RAMSIG posee fotografías reales de su personal uniformado, patrulla y centro de monitoreo (`IMG_0334.jpg`, `1_edited.jpg`, `IMG_1201_edited.jpg`, `IMG_0335.jpg`, `IMG_0354.jpg`, `IMG_1526_edited.jpg`, `b2d26d_a4382721a49f4c2fbc97ae3b834f2b92~mv2.jpeg` de `2268x4032` comprimida en un marco `320x585`, y `IMG_0467.heic` en `/contacto`), pero aparecen con recortes forzados, proporciones verticales/horizontales incompatibles y sin gradación editorial uniforme.

---

## 5. Hallazgos de Mensajería, Confianza B2B, Contacto y Conversión

### 5.1 Hero sin propuesta de valor ni llamado a la acción

El primer bloque de `/` presenta únicamente el saludo genérico `"Bienvenido/a a RAMSIG Seguridad Privada"` (`#comp-m4titcp5`), sin explicar qué protege la empresa, a qué industrias atiende (**Industria**, **Obras de Construcción**, **Parques Logísticos**), ni ofrecer un botón primario de cotización (`CTA`) sobre el pliegue inicial.

### 5.2 Errores graves en datos de contacto y redacción

| Defecto | Evidencia observada | Impacto B2B |
|---|---|---|
| **Correo de plantilla activo** | En `/contacto`, el texto muestra `administracion@ramsigseguridad.com` pero el atributo real del enlace es `href="mailto:info@misitio.com"` | Un cliente corporativo que pulsa el correo envía su solicitud a un dominio inexistente |
| **Inconsistencia de buzones** | Home y `/contacto` muestran `administracion@ramsigseguridad.com`, mientras `/guardiaintramuro`, `/custodias` y `/monitoreo` usan `ventas@ramsigseguridad.com` | Fragmenta el enrutamiento comercial y genera desconfianza |
| **Dirección truncada** | En `/contacto` figura `"Naucalpan de Juá, Estado de México, México."` (cortado frente a `"Naucalpan de Juárez..."` en `/`) | Error tipográfico visible en la página principal de contacto |
| **Falta de ortografía en sede** | En `/` la lista de sedes incluye `"Queretaro."` sin tilde en lugar de `"Querétaro"` | Descuido editorial en un listado corporativo clave |
| **Teléfono no interactivo** | `55 3557 8304` aparece en `<span>` de texto plano (`0` enlaces `tel:` en todo el sitio) | Impide llamada directa desde móvil con un toque |
| **WhatsApp sin lada internacional y duplicado** | El botón de WhatsApp carece de prefijo `+52` y coexisten dos aplicaciones Wix superpuestas (`463fa61d-...` y `170b6a68-...`) | Redundancia visual y riesgo de fallo fuera de región local |
| **Ambigüedad de horario** | Se indica `"Horario de atención: Lunes a Viernes 9:00-18:00"` sin especificar que corresponde a oficina administrativa | Contradice la promesa de `"Monitoreo 24/7"` y operación continua |

### 5.3 Ausencia de respaldo regulatorio y privacidad

Un recorrido exhaustivo por las 6 rutas confirma **0 menciones** a permisos y registros obligatorios o esperados en la contratación de seguridad privada B2B en México:
- **SSPC / DGSP / SSP** (autorizaciones federales/estatales de seguridad privada).
- **REPSE** (Registro de Prestadoras de Servicios Especializados u Obras Especializadas, indispensable para cumplimiento fiscal y laboral de clientes industriales y constructoras).
- **Aviso de Privacidad** y símbolo/leyenda de derechos (`©`), exigidos por la LFPDPPP al recabar datos personales en formularios.

### 5.4 Formulario genérico que mezcla ventas B2B y reclutamiento

Tanto los bloques comerciales como la sección `"Únete a nuestro equipo"` utilizan el mismo formulario genérico de 4 campos (`Nombre.`, `Apellido`, `Correo electrónico`/`Email`, `Mensaje` + botón `Enviar.`/`Enviar`). Carece de:
- Nombre de la empresa o razón social.
- Teléfono de contacto directo.
- Selector de servicio requerido (**Guardia Intramuros**, **Monitoreo 24/7**, **Custodia de Mercancía**) y sector (**Industria**, **Obra de Construcción**, **Parque Logístico**).
- Separación clara entre **Cotización Corporativa** y **Bolsa de Trabajo**.
- Casilla o leyenda de aceptación del Aviso de Privacidad.

---

## 6. Inventario de Activos y Métricas Verificadas

A pesar de las deficiencias de presentación en Wix, el contenido de negocio verificado en el sitio actual constituye una base sólida que debe **conservarse, corregirse ortográficamente y elevarse visualmente** en el rediseño:

### 6.1 Métricas de impacto verificadas (Home `/`)

- **`+600`**: Empleos generados a lo largo de nuestra existencia.
- **`+10,000`**: Personas beneficiadas directa e indirectamente cada día.
- **`+40`**: Sitios operativos activos.
- **`+4M`**: Metros cuadrados vigilados diariamente.
- **`+2.5M`**: Horas de servicio de seguridad operadas anualmente.
- **`5` sedes estatales**: Estado de México (matriz en Naucalpan de Juárez), Ciudad de México, **Querétaro** (corrigiendo `"Queretaro."`), Jalisco y Baja California Sur.

### 6.2 Pilares de servicio y modalidades verificadas

1. **Guardia Intramuros (`/guardiaintramuro`):** Vigilancia presencial y control de accesos en 5 verticales (Industrial, Obra de Construcción, Corporativo, Comercial y Residencial). En el rediseño B2B se priorizan Industria, Obras de Construcción y Parques Logísticos.
2. **Monitoreo 24/7 (`/monitoreo`):** Centro de Monitoreo continuo 24/7, seguimiento GPS y videovigilancia mediante cámaras HD con visión nocturna y zoom óptico.
3. **Custodias de Mercancía (`/custodias`):** Protección de vehículos, personal y carga en tránsito mediante tres modalidades verificadas:
   - **Custodia Física:** Unidades de escolta en colaboración operativa con **CAPUFE**.
   - **Custodia Cabinera:** Elemento de seguridad a bordo de la unidad de transporte.
   - **Custodia Virtual:** Seguimiento GPS en tiempo real con **cuenta espejo** para el cliente y protocolos de reacción.

---

## 7. Matriz de Remediación (Puente hacia `DESIGN.md` y Landing Page Next.js)

| ID | Hallazgo auditado en `ramsigseguridad.com` | Remediación en `DESIGN.md` (M1) y Design System (M2) | Remediación en Landing Page Next.js (M3) |
|---|---|---|---|
| **R-01** | Fondo blanco Wix + residuos `#ED1C24`, `#1A2B6D`, `#00ADEF`, `#116dff` y logotipo `90x73px` aislado | Paleta `oklch()` dark-first (`--surface-0`..`--surface-3` negro/carbón, `--accent-gold`, `--surface-inverse` marfil cálido); cero bordes, gradientes o sombras | `BrandMark.tsx` con `ramsig-logo.png` en placa limpia `--surface-inverse` integrada con tipografía `"RAMSIG"` en `CapsuleNavbar` y `EditorialFooter` |
| **R-02** | Contraste insuficiente (`#D0B368` sobre `#FFFFFF` `2.03:1`; `#999997` `2.85:1`; `+2.5M` en repetidor oculto) | Pares verificados `--ink-primary` (`17.36:1`), `--ink-secondary` (`10.24:1`), `--ink-muted` (`>= 4.72:1`) y `--ink-on-gold` (`9.15:1`) | `SpecMetricCard.tsx`, `ImpactAndCoverage.tsx` y botones dorados utilizando exclusivamente tokens verificados WCAG AA/AAA |
| **R-03** | Mezcla de 5+ fuentes externas (`spinnaker`, `din-next`, `helvetica-w01`, `avenir`, `メイリオ`) | Regla estricta de cero peticiones de fuentes externas (`--font-sans`, `--font-serif`, `--font-mono` locales) | `src/app/globals.css`, `src/app/layout.tsx` y `next.config.ts` (`X-DNS-Prefetch-Control: off`) sin Google Fonts ni CDNs |
| **R-04** | 16 reglas `min-width:980px` + anchos fijos (`897px`/`930px`) causando overflow en `390x844` | Cápsulas fluidas y diseño responsivo sin anchos mínimos rígidos ni líneas divisoras | `CapsuleNavbar.tsx` (menú móvil accesible) y retículas responsivas con `scrollWidth <= innerWidth` en `390x844` y `1440x900` |
| **R-05** | Menú roto (`Servicios`, `Bolsa de Trabajo` -> `/`) y `<footer id="SITE_FOOTER">` vacío | Arquitectura semántica por secciones y navegación limpia por anclas | `CapsuleNavbar.tsx` (`#servicios`, `#sectores`, `#cobertura`, `#contacto`) + `EditorialFooter.tsx` completo con Aviso de Privacidad interactivo |
| **R-06** | Ausencia de `<h1>` en 5/6 rutas, título singular/plural desalineado y Hero genérico sin CTA | Jerarquía tipográfica clara (`HeroShowcase`) con `--hero-bg` (`#060504`), `--hero-fg` (`#F4F1EC`) y `--hero-highlight` | `HeroShowcase.tsx` con un único `<h1>` semántico, propuesta B2B explícita para industria/obra/logística y CTAs directos |
| **R-07** | Video aéreo residencial, `Captura de pantalla 2025-01-07...` en `/custodias` y mapa bloqueado al 60 % | Reglas de iconografía geométrica monocroma (`TacticalIcon`) y prohibición de capturas/placeholders ajenos | `TacticalIcon.tsx` (SVGs geométricos planos) + `ServicesArchitecture.tsx` y `SectorsGrid.tsx` en formato dossier arquitectónico limpio |
| **R-08** | `mailto:info@misitio.com`, `"Naucalpan de Juá"`, `"Queretaro."`, `55 3557 8304` sin `tel:`, horario ambiguo, form de 4 campos y 0 menciones a REPSE/SSPC/DGSP | Contrato tipado `CONTACT_INFO`, `COMPLIANCE_ITEMS` y `STATE_OFFICES` en `src/design-system/services.ts` | `QuoteBriefSection.tsx` (pestañas `Cotización Corporativa` vs `Bolsa de Trabajo`, preselección de servicio/sector, `ventas@ramsigseguridad.com`, `tel:+525535578304`, WhatsApp `+52`, horario admin vs 24/7) + bloque regulatorio en `ImpactAndCoverage.tsx` |
