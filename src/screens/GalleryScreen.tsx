import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useImageGallery } from '../hooks/useImageGallery';
import { ImageGridItem } from '../components/ImageGridItem';
import { ImageItem } from '../types/image';

const numColumns = 2;

export const GalleryScreen: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useImageGallery();

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const renderItem = ({ item }: { item: ImageItem }) => (
    <ImageGridItem item={item} />
  );

  const images = data?.pages.flatMap(page => page) ?? [];

  if (isLoading && !data) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loaderCenter} />;
  }

  if (isError) {
    return <View style={styles.container}><Text>Error al cargar las imágenes.</Text></View>;
  }

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() =>
        isFetchingNextPage ? (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loaderBottom} />
        ) : null
      }
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  listContainer: {
    backgroundColor: '#fff',
  },
  loaderCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderBottom: {
    paddingVertical: 20,
  },
});