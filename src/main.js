import debug from './ya/component/Sprite.js';
import player from './libs/flv/flv.js';
import Dispatcher from './ya/module/events/Dispatcher.js';
window['H5Player'] = player;

window['$'] = require('jquery');

new debug();
var a = function () {
  console.log('a');
}
Dispatcher.addEventListener('a', a);
Dispatcher.dispatchEvent('a');
Dispatcher.removeEventListener('a', a);
Dispatcher.dispatchEvent('a');