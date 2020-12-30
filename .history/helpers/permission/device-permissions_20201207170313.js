import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


const permission = {};


permission.getLocationPermission = ()=>{
    return new Promise((resolve, reject)=>{
        if (Constants.isDevice) {

            Permissions.getAsync(Permissions.LOCATION).then(async (locPer) => {
              if (locPer.status !== 'granted'){
                Permissions.askAsync(Permissions.LOCATION).then((status) => {
                //   alert(JSON.stringify(status));
                  if(status.status !== 'granted'){
                    // alert('LOCATION permission not granted');
                    resolve({status: false, msg: 'LOCATION permission not granted'});
                  }else{
                    resolve({status: true, msg: 'LOCATION permission granted'});
                    // alert('LOCATION permission granted');
                  }
                }).catch(err => {
                    reject(err);
                //   alert('LOCATION permission err  : ', err);
                });            
              }else{
                resolve({status: true, msg: 'All Ready have the location permission'});
              }
            }).catch(err=>{
                reject(err);
            //   alert('LOCATION permission err  : ', err);
            });          
            
        }
    });
}

export default permission;