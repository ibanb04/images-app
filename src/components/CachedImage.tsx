import React, { useEffect, useState } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { downloadAndCacheImage } from '../utils/downloadAndCacheImage';

const CachedImage = ({ imageUrl, style }: { imageUrl: string, style: any }) => {
    const [uri, setUri] = useState(null);

    useEffect(() => {
        const load = async () => {
            const localUri = await downloadAndCacheImage(imageUrl);
            setUri(localUri);
        };
        load();
    }, [imageUrl]);

    return (
        <View>
            {uri ? (
                <Image source={{ uri }} style={style} />
            ) : (
                <ActivityIndicator size="small" />
            )}
        </View>
    );
};

export default CachedImage;