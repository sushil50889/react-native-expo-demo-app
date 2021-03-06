import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

export const loadFonts = async ()=> {    
    const cacheFonts = Font.loadAsync({
      'epilogueitalic': require('../../assets/fonts/Epilogue/Epilogue-Italic-VariableFont_wght.ttf'),
      'epiloguevariable': require('../../assets/fonts/Epilogue/Epilogue-VariableFont_wght.ttf')
    });
    return Promise.all(cacheFonts);
}