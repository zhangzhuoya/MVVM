import {initMixin} from './init.js'
function D() {
    console.log('dddd')
    // console.log(this._init,'kkkk')
    this._init();
}
initMixin(D);// 初始化函数
export default D;