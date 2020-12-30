import { Asset } from 'expo-asset';

export const loadAssets = async ()=> {    
    const cacheAssets = Asset.loadAsync([
        require('../../assets/sound/notificationsound.mp3'),
        require('../../assets/map/marker-car.png'),
        require('../../assets/map/car-marker-big.png'),
        require('../../assets/lottijson/cube.mp4'),
    ]);
    return Promise.all(cacheAssets);
}