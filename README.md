# images-app
# 📸 Galería de Imágenes con Favoritos y Caché
![image](https://github.com/user-attachments/assets/396e5fd6-aa8e-4ade-86a5-c3594c5d11ad)

Aplicación desarrollada en React Native con Expo como parte de una prueba técnica. La app muestra una galería de imágenes obtenidas desde la API de [Picsum](https://picsum.photos/), permite marcar favoritas y mantiene esta información persistente. También implementa un sistema básico de caché de imágenes.

## 🚀 Tecnologías

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) (para persistencia de favoritos)
- Fetch API (para obtener imágenes)
- Scroll infinito / paginación

## 🧩 Funcionalidades

- Mostrar galería de imágenes desde API de Picsum
- Scroll infinito para cargar más imágenes
- Marcar imágenes como favoritas
- Guardar favoritos entre sesiones usando AsyncStorage
- Caché básica de imágenes (reutilización del componente `Image` sin librerías externas)

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/nombre-repo.git
cd nombre-repo
