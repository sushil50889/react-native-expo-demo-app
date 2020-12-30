import * as Font from 'expo-font';

export const loadFonts = async ()=> {    
    const cacheFonts = await Font.loadAsync({
      'epilogueitalic': require('../../assets/fonts/Epilogue/Epilogue-Italic-VariableFont_wght.ttf'),
      'epiloguevariable': require('../../assets/fonts/Epilogue/Epilogue-VariableFont_wght.ttf')
    });
    return Promise.resolve(cacheFonts);
}