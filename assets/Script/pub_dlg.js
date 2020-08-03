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
        this.pub_dlg.active=false;
        this.dlg.active=false;
    },

    start () {

    },
    onExit:function(){
        var ac1 = cc.fadeTo(0.5,0);
        this.dlg.runAction(ac1);
        var ac2 = cc.scaleTo(0.5, 0).easing(cc.easeBackOut());
        this.pub_dlg.runAction(ac2);
        this.pub_dlg.active=false;
        this.dlg.active=false;
        this.exit.active=false;
    },
    onOpen:function(){
        this.Node.zindex=100;
        this.pub_dlg.active=true;
        this.dlg.active=true;
        this.exit.active=true;
        var ac1 = cc.fadeTo(0.5,1);
        this.dlg.runAction(ac1);
        var ac2 = cc.scaleTo(0.5, 0.7).easing(cc.easeBackOut());
        this.pub_dlg.runAction(ac2);
    },
    // update (dt) {},
});
