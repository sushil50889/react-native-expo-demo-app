import * as Font from 'expo-font';

export const loadFonts = ()=> {    
    const cacheFonts = Font.loadAsync({
      'epilogueitalic': require('../../assets/fonts/Epilogue/Epilogue-Italic-VariableFont_wght.ttf'),
      'epiloguevariable': require('../../assets/fonts/Epilogue/Epilogue-VariableFont_wght.ttf')
    });
    return Promise.all(cacheFonts);
}