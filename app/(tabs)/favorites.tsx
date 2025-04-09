import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ImageGridItem } from '../../src/components/ImageGridItem';
import { ImageItem } from '../../src/types/image';
import { useFavoritesStore } from '../../src/store/favoritesStore';
import { NUM_COLUMNS } from '../../src/utils/constants';

export default function FavoritesScreen() {
    const { favorites, toggleFavorite } = useFavoritesStore();
    const renderItem = ({ item }: { item: ImageItem }) => (
        <ImageGridItem
            item={item}
            isFavorite={true}
            onToggleFavorite={toggleFavorite}
        />
    );

    if (!favorites.length) {
        return <View style={styles.centered}><Text style={styles.text}>No tienes imágenes favoritas.</Text></View>;
    }

    return (
        <FlatList
            data={favorites}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={NUM_COLUMNS}
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
    text: {
        fontSize: 18,
    },
});