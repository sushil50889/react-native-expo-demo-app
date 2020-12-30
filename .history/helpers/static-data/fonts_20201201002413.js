import React, {useState} from 'react';
import * as Font from 'expo-font';


// export const fonts = {
//     epilogueitalic: 'epilogueitalic',
//     epiloguevariable: 'epiloguevariable',
// }




export default function fontss () {
    const [a, setA] = useState(false);
    const [f, setF] = useState({
        epilogueitalic: null,
        epiloguevariable: null
    });
    // let fff = {};
    Font.loadAsync({
        'epilogueitalic': require('../../assets/fonts/Epilogue/Epilogue-Italic-VariableFont_wght.ttf'),
        'epiloguevariable': require('../../assets/fonts/Epilogue/Epilogue-VariableFont_wght.ttf')
    }).then(()=>{
        setA(true);
        setF({ 
            epilogueitalic: 'epilogueitalic',
            epiloguevariable: 'epiloguevariable'
        })
    }).catch(err =>{
        // return null
        setF({});
    }); 

    if(a){
        return f;
    }else{
        return f;
    }
    
    
}