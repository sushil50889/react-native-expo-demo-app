import * as Font from 'expo-font';

export const fonts = {
    epilogueitalic: 'epilogueitalic',
    epiloguevariable: 'epiloguevariable',
}




export function fontss () {
    let fff = {};
    return Font.loadAsync({
        'epilogueitalic': require('../../assets/fonts/Epilogue/Epilogue-Italic-VariableFont_wght.ttf'),
        'epiloguevariable': require('../../assets/fonts/Epilogue/Epilogue-VariableFont_wght.ttf')
    }).then(()=>{
        fff = { 
            epilogueitalic: 'epilogueitalic',
            epiloguevariable: 'epiloguevariable'
        }
    }).catch(err =>{
        // return null
    }); 
    
    return fff;
}