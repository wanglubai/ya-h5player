import player from './libs/flv/flv.js';
import YaBase from './ya/interface/YaBase.js';
// import yaDebug from '/ya/component/YaDebug.js';
window['H5Player'] = player;

window['$'] = require('jquery');
new YaBase();
// yaDebug.log('a');