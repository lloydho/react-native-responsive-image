var device = require('react-native').Dimensions.get('window');

var scale = 1;

//iPhone4
if (device.width === 320 && device.height == 480) {
    scale = 0.765;
}

//iPhone5
if (device.width === 320 && device.height == 568) {
    scale = 0.765;
}

//iPhone6
if (device.width === 375 && device.height == 667) {
    scale = 0.902;
}

//iPhone6plus
if (device.width === 414 && device.height == 736) {
    scale = 1;
}


//iPad
//if (device.width === 768 && device.height == 1024) {
//    scale = 1;
//}


module.exports = {
    scale: scale
};
