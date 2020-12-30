import { Asset } from 'expo-asset';

export const loadAssets = async ()=> {    
    const cacheAssets = Asset.loadAsync([
        require('../../assets/sound/notificationsound.mp3'),
        require('../../assets/map/marker-car.png'),
    ]);
    return Promise.all(cacheAssets);
}