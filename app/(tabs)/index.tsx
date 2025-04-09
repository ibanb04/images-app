import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useImageGallery } from '../../src/hooks/useImageGallery';
import { ImageGridItem } from '../../src/components/ImageGridItem';
import { ImageItem } from '../../src/types/image';

const numColumns = 2;

export default function HomeScreen() {
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

    // juntar todas las páginas en un solo array 
    const images = data?.pages?.reduce((total, page) => [...total, ...page], []) || [];

    if (isLoading && !data) {
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