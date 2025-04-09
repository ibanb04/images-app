import React, { useState, useEffect } from 'react';
import { Image, ImageProps, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { CACHE_DIRECTORY } from '../../../utils/constants';
import { styles } from './styles';
import { LoadingIndicator } from '../LoadingIndicator';

interface CachedImageProps extends Omit<ImageProps, 'source'> {
  uri: string;
  cacheKey?: string;
}

export const CachedImage: React.FC<CachedImageProps> = ({ uri, cacheKey, style, ...props }) => {
  const [imageUri, setImageUri] = useState<string>(uri);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const cacheImage = async () => {
      try {
        const filename = cacheKey || uri.split('/').pop() || 'image';
        const fileUri = `${FileSystem.cacheDirectory}${CACHE_DIRECTORY}${filename}`;

        // Verificar si la imagen ya está en caché
        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        
        if (fileInfo.exists) {
          if (isMounted) {
            setImageUri(fileUri);
            setIsLoading(false);
          }
          return;
        }

        // Si no está en caché, descargarla
        const downloadResult = await FileSystem.downloadAsync(uri, fileUri);
        if (isMounted) {
          setImageUri(downloadResult.uri);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error caching image:', error);
        if (isMounted) {
          setImageUri(uri); // Fallback a la URL original
          setIsLoading(false);
        }
      }
    };

    cacheImage();

    return () => {
      isMounted = false;
    };
  }, [uri, cacheKey]);

  if (isLoading) {
    return (
      <View style={[styles.loadingContainer, style]}>
        <LoadingIndicator size="small" />
      </View>
    );
  }

  return <Image source={{ uri: imageUri }} style={style} {...props} />;
}; 