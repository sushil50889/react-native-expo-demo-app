import * as Font from 'expo-font';

export const loadFonts = async ()=> {    
    const cacheFonts = Font.loadAsync({
      'epilogueitalic': require('../../assets/fonts/Epilogue/Epilogue-Italic-VariableFont_wght.ttf'),
      'epiloguevariable': require('../../assets/fonts/Epilogue/Epilogue-VariableFont_wght.ttf'),
      'mitrRegular': require('../../assets/fonts/Mitr/Mitr-Regular.ttf'),
    });
    return Promise.all(cacheFonts);
}