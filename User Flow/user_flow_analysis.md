# Reporte de Replicación y Mejoras del UX User Flow: FEELING APP

Se ha procesado y analizado minuciosamente la imagen **[FEELING APP.jpg](file:///c:/Users/Demian/Documents/UX-UI/FEELING%20APP/FEELING%20APP.jpg)**. Se replicó el 100% de la estructura de nodos, sub-listas de ítems, conexiones y codificación de colores, asegurando la continuidad total sin nodos huérfanos o callejones sin salida.

---

## 📱 Estructura Actualizada de la NavBar Inferior Persistente (5 Botones)

- 1️⃣ **INTRO (HOME APP)**: Aloja **5 Tarjetas Iniciales (Directorios Independientes)**:
  - **`Tarjeta 1: TARJETA INTRODUCCIÓN A LA COMUNIDAD (EFÍMERA / ONBOARDING)`**: Muestra contenido visual de bienvenida y presentación de la comunidad. Una vez leída y vista por completo, **desaparece permanentemente** de la pantalla Intro.
  - **`Tarjeta 2: TESTIMONIOS (VOCES)`**: Acceso al directorio de testimonios -> Media Pool (`SCR-203`).
  - **`Tarjeta 3: LUGARES`**: Acceso al directorio de lugares -> Media Pool (`SCR-204`).
  - **`Tarjeta 4: INSTITUCIONES`**: Acceso al directorio de instituciones -> Media Pool (`SCR-205`).
  - **`Tarjeta 5: EMPRESAS (SUSTENTO)`**: Acceso al directorio de empresas (36 ítems) -> Media Pool (`SCR-206`).

- 2️⃣ **AGENDA**: Pestañas *Próximo* y *Calendario* -> Tarjeta de Evento Unificada (Doble Botón: *Registrarse* + *Agendar*).
- 3️⃣ **NOVEDADES**: Historias Efímeras 24h.
- 4️⃣ **BIBLIOTECA**: Streaming de Música, Documentales, Podcasts y Cancionero (Con opción de reproducción con/sin conexión).
- 5️⃣ **MENÚ / MÁS**: FAQs, Contacto, Nuestro Inspirador, Perfil & Ajustes + Verificación KYC.

```mermaid
graph TD
    NAVBAR["📱 NavBar Inferior (5 Botones)"] --> B1["1️⃣ INTRO (HOME)"]
    NAVBAR --> B2["2️⃣ AGENDA"]
    NAVBAR --> B3["3️⃣ NOVEDADES"]
    NAVBAR --> B4["4️⃣ BIBLIOTECA"]
    NAVBAR --> B5["5️⃣ MENÚ / MÁS"]

    B1 --> T1["✨ Tarjeta Introducción Comunidad (Efímera/Onboarding)"]
    B1 --> T2["Tarjeta Testimonios (Voces) - SCR-203"]
    B1 --> T3["📍 Tarjeta Lugares - SCR-204"]
    B1 --> T4["🏛️ Tarjeta Instituciones - SCR-205"]
    B1 --> T5["💼 Tarjeta Empresas (Sustento) - SCR-206"]

    T1 --> MEDIA_ONB["Lectura / Video Bienvenida"] --> FINISH_ONB["Leído / Visto Completo"]
    FINISH_ONB -.->|Desaparece permanentemente| B1

    B5 --> M1["FAQs"]
    B5 --> M2["Contacto"]
    B5 --> M3["Nuestro Inspirador"]
    B5 --> M4["Perfil & Ajustes + KYC"]
```

---

## 🔗 Auditoría Completa de Conectores y Bucle de Retorno (Loop Closure)

Se han añadido y verificado todos los **conectores de retorno y recuperación de errores** para garantizar que ningún flujo quede "colgado" o sin salida:

```mermaid
graph TD
    %% REINTENTOS DE AUTENTICACIÓN
    CRED_INV[CREDENCIAL INVÁLIDA] -.->|Reintentar| LOG_IN[LOG IN]
    CRED_NO_REG[CREDENCIAL NO REGISTRADA] -.->|Crear Cuenta| SIGN_IN[SIGN IN]

    %% REINTENTOS DE FOTOS EN KYC
    KYC_INV1[INVÁLIDO DNI] -.->|Reintentar Captura| FOTO_DNI[Fotografía Frente / Dorso]
    KYC_INV2[INVÁLIDO ROSTRO] -.->|Reintentar Captura| FOTO_ROSTRO[Fotografía Rostro Selfie]

    %% RETORNO DE AGENDAR EN CALENDARIO EXTERNO
    EXT_CAL[Calendario Celular Nativo] -.->|Retorno| TARJETA_EVENTO[Tarjetas de Evento]

    %% RETORNO DE EDICIÓN DE PERFIL
    PASS_NEW[Nueva Contraseña] -.->|Guardar| USR_PROFILE[Perfil Usuario]
```

---

## 📁 Archivos Editables del Proyecto en `User Flow/`

1. 🌐 **[index.html](file:///c:/Users/Demian/Documents/UX-UI/FEELING%20APP/User%20Flow/index.html)**: Editor visual interactivo.
2. 📊 **[user_flow.mmd](file:///c:/Users/Demian/Documents/UX-UI/FEELING%20APP/User%20Flow/user_flow.mmd)**: Sintaxis Mermaid completa.
3. 📄 **[user_flow_data.json](file:///c:/Users/Demian/Documents/UX-UI/FEELING%20APP/User%20Flow/User_flow_data.json)**: JSON estructurado.
4. 🏷️ **[CODIFICACION_PANTALLAS.md](file:///c:/Users/Demian/Documents/UX-UI/FEELING%20APP/User%20Flow/CODIFICACION_PANTALLAS.md)**: Índice oficial de pantallas y mapeo a diseños.
