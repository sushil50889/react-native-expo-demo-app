import { Platform, StatusBar} from 'react-native';

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export default statusBarHeight;