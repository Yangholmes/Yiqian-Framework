/**
 * Cordova 热更新接口
 * @file
 * @author Yangholmes 2018-10-22
 */
let cApp = {
    init() {
        return new Promise(resolve => {
            document.addEventListener('deviceready', e => {
                resolve({code: 0, data: e, msg: 'Device is ready!'});
            }, false);
        });
    },
    checkVersion() {
        return new Promise((resolve, reject) => {
            chcp.isUpdateAvailableForInstallation((error, data) => {
                if (error) {
                    reject({code: error.code, data: error, msg: 'Nothing to install.'});
                }
                else {
                    resolve({code: 0, data, msg: 'New version was found!'});
                }
            });
        });
    },
    installNewVersion() {
        return new Promise((resolve, reject) => {
            chcp.installUpdate(error => {
                if (error) {
                    reject({code: error.code, data: error, msg: 'Failed to install the update!'});
                }
                else {
                    resolve({code: 0, data: {}, msg: 'Update installed!'});
                }
            });
        });
    }
};

export default cApp;
//
// cApp.init().then(() => {
//     return cApp.checkVersion();
// }).then(() => {
//     return cApp.installUpdate();
// }).catch(error => {
//     console.error(error);
// });
