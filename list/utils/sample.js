"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _dice=require("./dice");var _default=function _default(){var x=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];if(!x||!x.length){return}var l=x.length;var i=(0,_dice.roll)(l);return x[i-1]};exports["default"]=_default;