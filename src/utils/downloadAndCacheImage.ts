import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const downloadAndCacheImage = async (imageUrl: string) => {
  try {
    // Intentar obtener la ruta desde el almacenamiento
    const cachedPath = await AsyncStorage.getItem(imageUrl);
    if (cachedPath) {
      const fileInfo = await FileSystem.getInfoAsync(cachedPath);
      if (fileInfo.exists) {
        return cachedPath;
      }
    }

    // Si no existe, descargarla
    const fileName = imageUrl.split('/').pop();
    const localPath = `${FileSystem.cacheDirectory}${fileName}`;

    const downloadResumable = FileSystem.createDownloadResumable(
      imageUrl,
      localPath
    );

    const result = await downloadResumable.downloadAsync();
    const uri = result?.uri || localPath;

    // Guardar la ruta en AsyncStorage
    await AsyncStorage.setItem(imageUrl, uri);

    return uri;
  } catch (error) {
    console.error('Error cacheando imagen:', error);
    return imageUrl; // fallback a la URL original
  }
};