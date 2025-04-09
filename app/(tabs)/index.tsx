import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useImageGallery } from '../../src/hooks/useImageGallery';
import { ImageGridItem } from '../../src/components/ImageGridItem';
import { ImageItem } from '../../src/types/image';
import { useFavoritesStore } from '../../src/store/favoritesStore';
import { NUM_COLUMNS } from '../../src/utils/constants';
export default function HomeScreen() {
    const {
        images,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading: isLoadingImages,
        isError,
    } = useImageGallery();

    const { favorites, toggleFavorite, } = useFavoritesStore();
    const isFavorite = (imageId: string) => favorites.some((fav) => fav.id === imageId);
    const handleLoadMore = () => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    };

    const renderItem = ({ item }: { item: ImageItem }) => (
        <ImageGridItem
            item={item}
            isFavorite={isFavorite(item.id)}
            onToggleFavorite={toggleFavorite}
        />
    );



    if ((isLoadingImages) && !images.length) {
        return <View style={styles.centered}><ActivityIndicator size="large" color="#0000ff" /></View>;
    }

    if (isError) {
        return <View style={styles.centered}><Text>Error al cargar las imágenes.</Text></View>;
    }

    return (
        <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={NUM_COLUMNS}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={() =>
                isFetchingNextPage ? (
                    <ActivityIndicator size="large" color="#0000ff" style={styles.loaderBottom} />
                ) : null
            }
            contentContainerStyle={styles.listContainer}
            extraData={favorites}
        />
    );
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    listContainer: {
        backgroundColor: '#fff',
    },
    loaderBottom: {
        paddingVertical: 20,
    },
}); 