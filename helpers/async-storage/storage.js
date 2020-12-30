import AsyncStorage from '@react-native-async-storage/async-storage';

const asyncStore = {};


//**************************************************************** */
//******** get data from async storage */
//**************************************************************** */
asyncStore.getStorageItem = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // error reading value
        console.log(e);
    }
}


//**************************************************************** */
//******** setting data to async storage */
//**************************************************************** */
asyncStore.setStorageItem = async (key, value) => {
    try {
        const jsonStringValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonStringValue);
    } catch (e) {
        // saving error
        console.log(e);
    }
}


//**************************************************************** */
//******** removing data from async storage */
//**************************************************************** */
asyncStore.removeStorageItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch(e) {
        // remove error
        console.log(e);
    }
}


//**************************************************************** */
//******** removing all data from async storage */
//**************************************************************** */
asyncStore.clearAllStorage = async () => {
    try {
        await AsyncStorage.clear()
    } catch(e) {
        // clear error
        console.log(e);
    }
}



//**************************************************************** */
//******** update existing data on async storage */
//**************************************************************** */
asyncStore.updateExistingUserData = async (key, value) => {
    try {
        let existingData = await asyncStore.getStorageItem(key);
        if(existingData){
            existingData.push(value);
            const jsonStringValue = JSON.stringify(existingData);
            await AsyncStorage.setItem(key, jsonStringValue);
        }else{
            asyncStore.setStorageItem(key, [value]);
        }
        
    } catch (e) {
        // saving error
        console.log(e);
    }
}








export default asyncStore;