(function($, Edge, compId){

var im='https://raw.githubusercontent.com/DeathBarmaglot/puzzle/master/images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_3',
                type: 'image',
                rect: ['-1086px', '21px','2470px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/puzzle/master/images/3.svg','0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_22',
                type: 'image',
                rect: ['-1161px', '-319px','2620px','906px','auto', 'auto'],
                clip: ['rect(0px 2620px 321px 0px)'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/puzzle/master/images/2.svg','0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_22Copy',
                type: 'image',
                rect: ['-1161px', '-317px','2620px','906px','auto', 'auto'],
                clip: ['rect(330px 2620px 906px 0px)'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/puzzle/master/images/2.svg','0px','0px'],
                transform: [[],[],[],['0.09','0.09']]
            },
            {
                id: '_12',
                type: 'image',
                rect: ['-1307px', '-145px','2830px','406px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/puzzle/master/images/1.svg','0px','0px'],
                transform: [[],[],[],['0.2','0.2']]
            },
            {
                id: 'l',
                type: 'image',
                rect: ['-1040px', '-327px','2362px','812px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/puzzle/master/images/l.svg','0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'i',
                type: 'image',
                rect: ['-1103px', '-852px','2426px','1939px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/puzzle/master/images/i.svg','0px','0px'],
                transform: [[],[],[],['0.05','0.05']]
            },
            {
                id: 'Untitled-12',
                type: 'image',
                rect: ['193px', '12px','107px','160px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/puzzle/master/images/Untitled-12.png','0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_l}": [
                ["style", "top", '-316px'],
                ["transform", "scaleY", '0.1'],
                ["style", "height", '812px'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '-1032px'],
                ["style", "width", '2362px']
            ],
            "${__22Copy}": [
                ["style", "top", '-317px'],
                ["style", "height", '906px'],
                ["transform", "scaleY", '0.09'],
                ["style", "left", '-1161px'],
                ["transform", "scaleX", '0.09'],
                ["style", "opacity", '0'],
                ["style", "clip", [330,2620,906,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '2620px']
            ],
            "${__22}": [
                ["style", "top", '-319px'],
                ["style", "height", '906px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '-1161px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,2620,321,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '2620px']
            ],
            "${_Untitled-12}": [
                ["style", "top", '12px'],
                ["style", "height", '160px'],
                ["style", "opacity", '0'],
                ["style", "left", '193px'],
                ["style", "width", '107px']
            ],
            "${__3}": [
                ["transform", "scaleX", '0'],
                ["style", "top", '21px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '-1086px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(198,163,205,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${_i}": [
                ["style", "top", '-852px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '1939px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-1103px'],
                ["style", "width", '2426px']
            ],
            "${__12}": [
                ["style", "top", '-145px'],
                ["transform", "scaleX", '0.2'],
                ["transform", "scaleY", '0.2'],
                ["style", "left", '-1307px'],
                ["style", "height", '406px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,2830,242.0244140625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '2830px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12000,
            autoPlay: true,
            timeline: [
                { id: "eid70", tween: [ "style", "${_Untitled-12}", "opacity", '1', { fromValue: '0'}], position: 4092, duration: 621 },
                { id: "eid72", tween: [ "style", "${_Untitled-12}", "opacity", '0', { fromValue: '1'}], position: 6394, duration: 621 },
                { id: "eid18", tween: [ "transform", "${__3}", "scaleX", '0.05', { fromValue: '0'}], position: 750, duration: 500 },
                { id: "eid24", tween: [ "transform", "${__3}", "scaleX", '0', { fromValue: '0.05'}], position: 2386, duration: 500 },
                { id: "eid89", tween: [ "style", "${_i}", "opacity", '1', { fromValue: '0'}], position: 4131, duration: 419 },
                { id: "eid98", tween: [ "style", "${_i}", "opacity", '0', { fromValue: '1'}], position: 6594, duration: 419 },
                { id: "eid30", tween: [ "transform", "${__22}", "scaleX", '0.12', { fromValue: '0'}], position: 7537, duration: 500 },
                { id: "eid88", tween: [ "transform", "${_i}", "scaleX", '0.05', { fromValue: '0'}], position: 4235, duration: 515 },
                { id: "eid97", tween: [ "transform", "${_i}", "scaleX", '0', { fromValue: '0.05'}], position: 6394, duration: 515 },
                { id: "eid82", tween: [ "style", "${_l}", "top", '-361px', { fromValue: '-316px'}], position: 6605, duration: 515 },
                { id: "eid54", tween: [ "transform", "${_l}", "scaleX", '0', { fromValue: '0.1'}], position: 2886, duration: 465 },
                { id: "eid78", tween: [ "transform", "${_l}", "scaleX", '0.07', { fromValue: '0'}], position: 7119, duration: 515 },
                { id: "eid80", tween: [ "style", "${_l}", "left", '-1040px', { fromValue: '-1032px'}], position: 6605, duration: 515 },
                { id: "eid55", tween: [ "transform", "${_l}", "scaleY", '0', { fromValue: '0.1'}], position: 2886, duration: 465 },
                { id: "eid79", tween: [ "transform", "${_l}", "scaleY", '0.07', { fromValue: '0'}], position: 7119, duration: 515 },
                { id: "eid17", tween: [ "transform", "${__3}", "scaleY", '0.05', { fromValue: '0'}], position: 750, duration: 500 },
                { id: "eid25", tween: [ "transform", "${__3}", "scaleY", '0', { fromValue: '0.05'}], position: 2386, duration: 500 },
                { id: "eid63", tween: [ "style", "${__22}", "opacity", '1', { fromValue: '0'}], position: 7537, duration: 500 },
                { id: "eid60", tween: [ "style", "${__22}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 1000 },
                { id: "eid2", tween: [ "style", "${__12}", "opacity", '1', { fromValue: '0'}], position: 3421, duration: 671 },
                { id: "eid8", tween: [ "style", "${__12}", "opacity", '0', { fromValue: '1'}], position: 6622, duration: 628 },
                { id: "eid31", tween: [ "transform", "${__22}", "scaleY", '0.12', { fromValue: '0'}], position: 7537, duration: 500 },
                { id: "eid90", tween: [ "transform", "${_i}", "scaleY", '0.05', { fromValue: '0'}], position: 4235, duration: 515 },
                { id: "eid99", tween: [ "transform", "${_i}", "scaleY", '0', { fromValue: '0.05'}], position: 6394, duration: 515 },
                { id: "eid49", tween: [ "style", "${_l}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1117 },
                { id: "eid85", tween: [ "style", "${_l}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 522 },
                { id: "eid87", tween: [ "style", "${_l}", "opacity", '1', { fromValue: '0'}], position: 7015, duration: 522 },
                { id: "eid62", tween: [ "style", "${_l}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 1000 },
                { id: "eid46", tween: [ "style", "${__22Copy}", "opacity", '1', { fromValue: '0'}], position: 8750, duration: 598 },
                { id: "eid47", tween: [ "style", "${__22Copy}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 1000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-5115098");
