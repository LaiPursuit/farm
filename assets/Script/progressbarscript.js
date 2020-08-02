cc.Class({
    extends: cc.Component,
    // 脚本自定义的属性，当前自定义的属性会在属性检查中查看到
    properties: {
        speed: 1,
        progressBarView: {
             type: cc.ProgressBar,
             default: null
        }
    },
    //当我们将脚本添加到节点 `node`上面的时候
    onLoad: function () {
        this._ping = true;
        this.progressBarView.progress = 0;
    },
    //如果该组件启用，则每帧调用 update 
    //dt:Number the delta time in seconds it took to complete the last frame
    update: function (dt) {
        this._updateProgressBar(this.progressBarView, dt);
    },
    _updateProgressBar: function(progressBar, dt){
        var progress = progressBar.progress;
        if(progress < 1.0 && this._ping){
            progress += dt * this.speed;
        }
        else {
            progress -= dt * this.speed;
            this._ping = progress <= 0;
        }
        progressBar.progress = progress;
    }
});