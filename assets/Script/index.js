// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var pub_dlg = require("./pub_dlg");
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
        scene: {
            type: cc.Node,
            default: null
        },
        title: {
            type: cc.Node,
            default: null
        },
        land: {
            type: cc.Node,
            default: null
        },
        audioSource: {
            type: cc.AudioSource,
            default: null
        },
        pub_dlg: {
            type: pub_dlg,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    //onLoad() { },

    start() {
        this.Start();
    },
    hide() {
        var ac1 = cc.fadeTo(0.5, 0);
        this.title.runAction(ac1);
        this.land.scale = 0;
        var ac2 = cc.fadeTo(0.5, 0)
        this.scene.runAction(ac2);
        this.scheduleOnce(function () {
            var ac3 = cc.fadeIn(0.8)
            this.scene.runAction(ac3);
            this.scene.scale = 2;
            this.title.active = false;
            var ac4 = cc.scaleTo(1, 1).easing(cc.easeBackOut());
            this.land.runAction(ac4);
        }, 1);
    },
    Start() {
        this.audioSource.play();
        this.title.zIndex = 100;
        this.hide();
    },
    shop() {
        this.pub_dlg.onOpen("pub_dlg_shop");
    },
    //update(dt) { },
});
