// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        pub_dlg: {
            type: cc.Node,
            default: null
        },
        dlg: {
            type: cc.Node,
            default: null
        },
        exit: {
            type: cc.Node,
            default: null
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.active=false;
    },

    start () {

    },
    onExit(){
        var ac1 = cc.fadeTo(0.3,0);
        this.dlg.runAction(ac1);
        var ac2 = cc.scaleTo(0.1, 0).easing(cc.easeBackOut());
        this.exit.runAction(ac2);
        var ac3 = cc.scaleTo(0.5, 0).easing(cc.easeBackOut());
        var end_func = cc.callFunc(function(){
            this.node.active = false;
        }.bind(this));
        var sep = cc.sequence([ac3,end_func]);
        this.pub_dlg.runAction(sep);
    },
    onOpen(name){
        cc.log(name)
        this.dlg.scale = 1;
        var ac1 = cc.fadeTo(0.3,100);
        this.dlg.runAction(ac1);
        var ac2 = cc.scaleTo(0.5, 1).easing(cc.easeBackOut());
        this.exit.runAction(ac2);
        var ac3 = cc.scaleTo(0.5, 0.8).easing(cc.easeBackOut());
        this.pub_dlg.runAction(ac3);
        this.node.active = true;
    },
    // update (dt) {},
});
