# images-app
# 📸 Galería de Imágenes con Favoritos y Caché
![image](https://github.com/user-attachments/assets/396e5fd6-aa8e-4ade-86a5-c3594c5d11ad)


Aplicación desarrollada en **React Native** con **Expo**, como parte de una prueba técnica. La app muestra una galería de imágenes desde la API de [Picsum](https://picsum.photos/), permite marcar imágenes como favoritas y mantiene esta información persistente. También se implementa un sistema básico de caché.

## 🚀 Tecnologías Relevantes

- **React Native** – Core del desarrollo móvil.
- **Expo** – Facilitador del entorno de desarrollo.
- **expo-router** – Navegación basada en archivos.
- **AsyncStorage** – Persistencia local para favoritos.
- **Zustand** – Manejo de estado global simple y eficiente.
- **TanStack React Query** – Gestión de datos remotos y caching e Scroll Infinito.
- **Axios** – Cliente HTTP para llamadas a la API.
- **react-native-fs** – Utilidades para gestión de archivos, usada para manejo de caché de imágenes.

## 🧩 Funcionalidades

- Galería de imágenes con scroll infinito usando TanStack React Query.
- Carga de imágenes desde la API de Picsum.
- Marcado de imágenes como favoritas.
- Persistencia de favoritos con AsyncStorage.
- Sistema de caché utilizando `react-native-fs` (sin `react-native-fast-image`).
- Navegación con `expo-router`.

## 📦 Instalación

1. Clonar el repositorio:

```bash
git clone [https://github.com/tu-usuario/nombre-repo.git](https://github.com/ibanb04/images-app.git)
cd images-app
```
2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el proyecto::
```bash
npx expo start
```


## Estructura del proyecto

```
images-app/
├── app/                    # Configuración principal y pantallas
├── src/                    # Código fuente principal
│   ├── components/         # Componentes reutilizables
│   ├── services/          # Servicios y APIs
│   ├── utils/             # Funciones utilitarias
│   ├── hooks/             # Custom hooks de React
│   ├── theme/             # Temas y estilos
│   ├── types/             # Definiciones TypeScript
│   └── store/             # Estado global
├── assets/                # Recursos estáticos
│   ├── images/
│   ├── fonts/
│   └── icons/
├── .expo/                 # Configuración de Expo
├── .vscode/              # Configuración de VS Code
├── node_modules/         # Dependencias
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración de TypeScript
├── app.json             # Configuración de la aplicación
└── .gitignore           # Archivos ignorados por Git
```
