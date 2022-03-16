/**
 * 给D添加初始化
 */
let id = 0;
export function initMixin(D) {
    D.prototype._init = function(options) { 
        const vm = this// vm 对应虚拟节点
        vm._uid = id++;
        this.is_Due = true//虚拟节点
    }

}