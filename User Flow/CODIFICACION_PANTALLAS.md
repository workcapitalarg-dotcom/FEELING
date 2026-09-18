# 🏷️ Codificación y Nomenclatura de Pantallas (Screen Index)
## Feeling App - UX & Prototipado

Este sistema de codificación establece una referencia unívoca para relacionar cada pantalla del **User Flow** con los **archivos de diseño UI (Screens, Figma/JPGs)** y el **código del prototipo en `Proto/`**.

---

## 📌 Convención de Nombres de Archivos
Para mantener el orden cuando agregues nuevas imágenes en `/SCREENS` o crees vistas en `/Proto`:
- **Formatos sugeridos para Screens:** `[CODIGO]_[Nombre_Pantalla].jpg` (Ej: `SCR-101_Inicio.jpg`, `SCR-204_Lugares.jpg`, `SCR-205_Instituciones.jpg`)
- **Formatos sugeridos en Proto:** `scr-[codigo]-[nombre].html` o componentes dentro de `/Proto`.

---

## 📂 Mapeo General por Módulos

### 🔐 MÓDULO 100: AUTENTICACIÓN Y ONBOARDING (`AUTH`)
| Código | Pantalla / Componente | Descripción / Nodo User Flow | Estado |
| :--- | :--- | :--- | :--- |
| **SCR-101** | `INICIO` / Bienvenida | Pantalla inicial de bienvenida a Feeling App | Original |
| **SCR-102** | `LOG IN` | Formulario de inicio de sesión con Credencial/Pass | Original |
| **SCR-103** | `SIGN IN` | Formulario de registro (Nombre, Nac, Ciudad, Email) | Original |
| **SCR-104** | `AUTH SOCIAL` | Registro / Login mediante Google u otros proveedores | Original |
| **SCR-105** | `RECUPERAR CLAVE` | Olvidaste tu contraseña (OTP / Mail) | Mejora UX |

---

### 🏠 MÓDULO 200: INTRO / HOME APP & DIRECTORIOS (`INTRO`)
| Código | Pantalla / Componente | Descripción / Nodo User Flow | Estado |
| :--- | :--- | :--- | :--- |
| **SCR-201** | `INDEX / HOME` | Dashboard principal (Contenedor NavBar 5 botones) | Original |
| **SCR-202** | `TARJETA INTRODUCCIÓN` | Onboarding efímero de la comunidad (desaparece al leer) | Mejora UX |
| **SCR-203** | `TESTIMONIOS` | Tarjeta Voces / Testimonios de comunidad | Original |
| **SCR-204** | `LUGARES` | Directorio de Lugares (Predios, Espacios, etc.) | Separado |
| **SCR-205** | `INSTITUCIONES` | Directorio de Instituciones | Separado |
| **SCR-206** | `EMPRESAS` | Directorio Sustento / Empresas | Original |
| **SCR-207** | `MEDIA POOL` | Vista detallada / Listado de contenidos multimedia | Original |

---

### 📅 MÓDULO 300: AGENDA & EVENTOS (`AGENDA`)
| Código | Pantalla / Componente | Descripción / Nodo User Flow | Estado |
| :--- | :--- | :--- | :--- |
| **SCR-301** | `AGENDA - PRÓXIMO` | Pestaña de eventos próximos | Original |
| **SCR-302** | `AGENDA - CALENDARIO` | Vista de calendario de actividades y fechas | Original |
| **SCR-303** | `TARJETA EVENTO` | Tarjeta unificada con doble CTA (Registrarse + Agendar) | Mejora UX |
| **SCR-304** | `INTEGRACIÓN CALENDARIO` | Retorno y sync con calendario nativo del celular | Mejora UX |

---

### 📰 MÓDULO 400: NOVEDADES (`NOVEDADES`)
| Código | Pantalla / Componente | Descripción / Nodo User Flow | Estado |
| :--- | :--- | :--- | :--- |
| **SCR-401** | `FEED NOVEDADES` | Historias y publicaciones efímeras (24 horas) | Original |
| **SCR-402** | `VISUALIZADOR HISTORIAS` | Reproductor / Viewer de historia completa | Original |

---

### 🎵 MÓDULO 500: BIBLIOTECA & STREAMING (`BIBLIO`)
| Código | Pantalla / Componente | Descripción / Nodo User Flow | Estado |
| :--- | :--- | :--- | :--- |
| **SCR-501** | `BIBLIOTECA HUB` | Hub central de contenidos multimedia | Original |
| **SCR-502** | `MÚSICA / AUDIO PLAYER` | Reproductor de música (Modo online / offline) | Original |
| **SCR-503** | `DOCUMENTALES` | Visualizador de videos y documentales de la comunidad | Original |
| **SCR-504** | `PODCASTS` | Streaming de audios y episodios | Original |
| **SCR-505** | `CANCIONERO` | Letras y cifrados de canciones | Original |

---

### ⚙️ MÓDULO 600: MENÚ, PERFIL & KYC (`MENU`)
| Código | Pantalla / Componente | Descripción / Nodo User Flow | Estado |
| :--- | :--- | :--- | :--- |
| **SCR-601** | `MENÚ MÁS` | Vista principal del quinto botón de navegación | Original |
| **SCR-602** | `FAQs` | Preguntas Frecuentes | Original |
| **SCR-603** | `CONTACTO` | Formulario y vías de contacto | Original |
| **SCR-604** | `NUESTRO INSPIRADOR` | Contenido biográfico / inspirador | Original |
| **SCR-605** | `PERFIL & AJUSTES` | Perfil de usuario y configuración general | Original |
| **SCR-606** | `VERIFICACIÓN KYC - DNI` | Captura de frente y dorso de DNI | Original |
| **SCR-607** | `VERIFICACIÓN KYC - ROSTRO`| Captura selfie de reconocimiento facial | Original |
| **SCR-608** | `ESTADO KYC` | Pantalla de estado (Aprobado / Reintento de fotos) | Mejora UX |

---

## 🖼️ Mapeo de Archivos Existentes en `/SCREENS`

| Archivo en `/SCREENS` | Código Asignado | Equivalente en Prototipo |
| :--- | :--- | :--- |
| `INICIO.jpg` | **SCR-101** | Pantalla de Login / Bienvenida inicial |
| `CARD VOCES.jpg` | **SCR-203** | Tarjeta: Testimonios / Voces |
| `CARD LUGARES.jpg` | **SCR-204** | Tarjeta: Directorio Lugares |
| `CARD INSTITUCIONES.jpg` | **SCR-205** | Tarjeta: Directorio Instituciones |
| `CARD SUSTENTO.jpg` | **SCR-206** | Tarjeta: Empresas / Sustento |

---

## 💡 Próximo Paso en `/Proto`
Al comenzar a desarrollar las pantallas en `/Proto`, utilizaremos este identificador como nombre de clase principal o `id` en el HTML/CSS/JS (por ejemplo `<section id="scr-101" class="screen">`), lo que permitirá mapear el prototipo 1:1 con el User Flow y las imágenes de diseño.
