import {Workbox} from 'workbox-window';

console.log('-----------')


const wb = new Workbox('/pwa/sw.js');
wb.register();

const swVersion = await wb.messageSW({type: 'GET_VERSION'});
console.log('Service Worker version:', swVersion);


