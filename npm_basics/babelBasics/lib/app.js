"use strict";

var _Teacher = _interopRequireDefault(require("./Teacher.mjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var teacher = new _Teacher["default"]('Erkan', 'Tanyıldızı', 1980, 40000, 'Data Structure');
console.log("Age: " + teacher.calculateAge());
teacher.greeting();