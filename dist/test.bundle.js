/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["canvaslib"] = factory();
	else
		root["canvaslib"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core.ts":
/*!*********************!*\
  !*** ./src/core.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Primitives = exports.Vertices = exports.Vector = exports.Mathf = exports.Render = exports.GameObject = exports.Events = exports.EngineModule = exports.Engine = void 0;\r\nvar Engine_1 = __importDefault(__webpack_require__(/*! ./core/Engine */ \"./src/core/Engine.ts\"));\r\nexports.Engine = Engine_1.default;\r\nvar Events_1 = __importDefault(__webpack_require__(/*! ./core/Events */ \"./src/core/Events.ts\"));\r\nexports.Events = Events_1.default;\r\nvar EngineModule_1 = __importDefault(__webpack_require__(/*! ./core/modules/EngineModule */ \"./src/core/modules/EngineModule.ts\"));\r\nexports.EngineModule = EngineModule_1.default;\r\nvar Primitives_1 = __importDefault(__webpack_require__(/*! ./factory/Primitives */ \"./src/factory/Primitives.ts\"));\r\nexports.Primitives = Primitives_1.default;\r\nvar Mathf_1 = __importDefault(__webpack_require__(/*! ./math/Mathf */ \"./src/math/Mathf.ts\"));\r\nexports.Mathf = Mathf_1.default;\r\nvar Vector_1 = __importDefault(__webpack_require__(/*! ./math/Vector */ \"./src/math/Vector.ts\"));\r\nexports.Vector = Vector_1.default;\r\nvar Vertex_1 = __importDefault(__webpack_require__(/*! ./math/Vertex */ \"./src/math/Vertex.ts\"));\r\nexports.Vertices = Vertex_1.default;\r\nvar GameObject_1 = __importDefault(__webpack_require__(/*! ./object/GameObject */ \"./src/object/GameObject.ts\"));\r\nexports.GameObject = GameObject_1.default;\r\nvar Render_1 = __importDefault(__webpack_require__(/*! ./render/Render */ \"./src/render/Render.ts\"));\r\nexports.Render = Render_1.default;\r\n\n\n//# sourceURL=webpack://canvaslib/./src/core.ts?");

/***/ }),

/***/ "./src/core/Engine.ts":
/*!****************************!*\
  !*** ./src/core/Engine.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __importDefault(__webpack_require__(/*! ../math/Vector */ \"./src/math/Vector.ts\"));\r\nvar Engine = /** @class */ (function () {\r\n    /* eslint-disable-next-line */\r\n    function Engine(options) {\r\n        this.timing = {\r\n            delta: 0,\r\n            timestamp: 0,\r\n            lastDelta: 0,\r\n            lastElapsed: 0,\r\n        };\r\n        this.gravity = new Vector_1.default(0, 1);\r\n        this.gravityScale = 0.001;\r\n        // todo add options\r\n        this.gameObjects = [];\r\n    }\r\n    Engine.prototype.AddGameObject = function (gameObject) {\r\n        this.gameObjects.push(gameObject);\r\n        this.render.AddGameObject(gameObject);\r\n    };\r\n    Engine.prototype.Update = function (delta) {\r\n        var startTime = Date.now();\r\n        var deltaTime = delta || 1000 / 60;\r\n        this.timing.delta = deltaTime;\r\n        this.timing.timestamp += deltaTime;\r\n        this.timing.lastDelta = deltaTime;\r\n        for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {\r\n            var go = _a[_i];\r\n            var comps = go.GetComponents();\r\n            for (var _b = 0, comps_1 = comps; _b < comps_1.length; _b++) {\r\n                var comp = comps_1[_b];\r\n                comp.Update(deltaTime);\r\n            }\r\n        }\r\n        this.timing.lastElapsed = Date.now() - startTime;\r\n    };\r\n    return Engine;\r\n}());\r\nexports[\"default\"] = Engine;\r\n\n\n//# sourceURL=webpack://canvaslib/./src/core/Engine.ts?");

/***/ }),

/***/ "./src/core/Events.ts":
/*!****************************!*\
  !*** ./src/core/Events.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Events = /** @class */ (function () {\r\n    function Events() {\r\n    }\r\n    return Events;\r\n}());\r\nexports[\"default\"] = Events;\r\n\n\n//# sourceURL=webpack://canvaslib/./src/core/Events.ts?");

/***/ }),

/***/ "./src/core/modules/EngineModule.ts":
/*!******************************************!*\
  !*** ./src/core/modules/EngineModule.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar EngineModule = /** @class */ (function () {\r\n    function EngineModule() {\r\n    }\r\n    return EngineModule;\r\n}());\r\nexports[\"default\"] = EngineModule;\r\n\n\n//# sourceURL=webpack://canvaslib/./src/core/modules/EngineModule.ts?");

/***/ }),

/***/ "./src/factory/Primitives.ts":
/*!***********************************!*\
  !*** ./src/factory/Primitives.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __importDefault(__webpack_require__(/*! ../math/Vector */ \"./src/math/Vector.ts\"));\r\nvar Vertex_1 = __importDefault(__webpack_require__(/*! ../math/Vertex */ \"./src/math/Vertex.ts\"));\r\nvar Mathf_1 = __webpack_require__(/*! ../math/Mathf */ \"./src/math/Mathf.ts\");\r\nvar GameObject_1 = __importDefault(__webpack_require__(/*! ../object/GameObject */ \"./src/object/GameObject.ts\"));\r\nvar Primitives = /** @class */ (function () {\r\n    function Primitives() {\r\n    }\r\n    Primitives.Rectangle = function (x, y, width, height, options) {\r\n        var label = \"Rectangle\";\r\n        var position = new Vector_1.default(x, y);\r\n        var vertices = [\r\n            new Vertex_1.default(x, y, 0),\r\n            new Vertex_1.default(x + width, y, 0),\r\n            new Vertex_1.default(x + width, y + width, 0),\r\n            new Vertex_1.default(x, y + width, 0),\r\n        ];\r\n        return new GameObject_1.default(label, position, vertices, options);\r\n    };\r\n    Primitives.Circle = function (x, y, radius, options) {\r\n        var label = \"Circle\";\r\n        var position = new Vector_1.default(x, y);\r\n        var vertices = [];\r\n        var numVertices = 50;\r\n        var spacing = 360 / numVertices;\r\n        for (var i = 0; i < numVertices; i++) {\r\n            var x_1 = Math.cos((0, Mathf_1.AngleToRadians)(i * spacing)) * radius;\r\n            var y_1 = Math.sin((0, Mathf_1.AngleToRadians)(i * spacing)) * radius;\r\n            vertices.push(new Vertex_1.default(x_1, y_1, i, false));\r\n        }\r\n        return new GameObject_1.default(label, position, vertices, options);\r\n    };\r\n    return Primitives;\r\n}());\r\nexports[\"default\"] = Primitives;\r\n\n\n//# sourceURL=webpack://canvaslib/./src/factory/Primitives.ts?");

/***/ }),

/***/ "./src/input/Input.ts":
/*!****************************!*\
  !*** ./src/input/Input.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Input = /** @class */ (function () {\r\n    function Input() {\r\n    }\r\n    Input.addMapping = function (name, key) {\r\n        var newMapping = {\r\n            key: key,\r\n            name: name,\r\n            pressed: false,\r\n            released: false,\r\n            continous: false,\r\n        };\r\n        this.buttonMappings.push(newMapping);\r\n    };\r\n    Input.addListener = function () {\r\n        window.addEventListener(\"keydown\", this.keyDownListener.bind(this));\r\n        window.addEventListener(\"keyup\", this.keyUpListener.bind(this));\r\n        window.addEventListener(\"keypress\", this.keyPressListener.bind(this));\r\n    };\r\n    Input.keyPressListener = function (e) {\r\n        for (var _i = 0, _a = this.buttonMappings; _i < _a.length; _i++) {\r\n            var mapping = _a[_i];\r\n            if (e.code === mapping.key) {\r\n                mapping.continous = true;\r\n            }\r\n        }\r\n    };\r\n    Input.keyDownListener = function (e) {\r\n        if (e.repeat)\r\n            return;\r\n        for (var _i = 0, _a = this.buttonMappings; _i < _a.length; _i++) {\r\n            var mapping = _a[_i];\r\n            if (e.code === mapping.key) {\r\n                mapping.pressed = true;\r\n                mapping.released = false;\r\n            }\r\n        }\r\n    };\r\n    Input.keyUpListener = function (e) {\r\n        if (e.repeat)\r\n            return;\r\n        for (var _i = 0, _a = this.buttonMappings; _i < _a.length; _i++) {\r\n            var mapping = _a[_i];\r\n            if (e.code === mapping.key) {\r\n                mapping.released = true;\r\n                mapping.pressed = false;\r\n                mapping.continous = false;\r\n            }\r\n        }\r\n    };\r\n    Input.getButtonDown = function (key) {\r\n        var mapping = this.buttonMappings.find(function (e) { return e.name === key; });\r\n        if (mapping) {\r\n            if (mapping.pressed) {\r\n                mapping.pressed = false;\r\n                return true;\r\n            }\r\n            else {\r\n                return false;\r\n            }\r\n        }\r\n        else {\r\n            console.error(\"Key '\" + key + \"' does not exist\");\r\n            return false;\r\n        }\r\n    };\r\n    Input.getButtonUp = function (key) {\r\n        var mapping = this.buttonMappings.find(function (e) { return e.name === key; });\r\n        if (mapping) {\r\n            if (mapping.released) {\r\n                mapping.released = false;\r\n                return true;\r\n            }\r\n            else {\r\n                return false;\r\n            }\r\n        }\r\n        else {\r\n            console.error(\"Key '\" + key + \"' does not exist\");\r\n            return false;\r\n        }\r\n    };\r\n    Input.getButton = function (key) {\r\n        var mapping = this.buttonMappings.find(function (e) { return e.name === key; });\r\n        if (mapping) {\r\n            return mapping.continous;\r\n        }\r\n        else {\r\n            console.error(\"Key '\" + key + \"' does not exist\");\r\n            return false;\r\n        }\r\n    };\r\n    Input.buttonMappings = [];\r\n    return Input;\r\n}());\r\nexports[\"default\"] = Input;\r\n\n\n//# sourceURL=webpack://canvaslib/./src/input/Input.ts?");

/***/ }),

/***/ "./src/math/Mathf.ts":
/*!***************************!*\
  !*** ./src/math/Mathf.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.AngleToRadians = exports.Lerp = exports.PingPong = exports.Repeat = exports.Clamp01 = exports.Clamp = void 0;\r\nvar Clamp = function (value, min, max) {\r\n    return Math.max(min, Math.min(value, max));\r\n};\r\nexports.Clamp = Clamp;\r\nvar Clamp01 = function (value) {\r\n    if (value < 0) {\r\n        return 0;\r\n    }\r\n    else if (value > 1) {\r\n        return 1;\r\n    }\r\n    else {\r\n        return value;\r\n    }\r\n};\r\nexports.Clamp01 = Clamp01;\r\nvar Repeat = function (t, length) {\r\n    return Clamp(t - Math.floor(t / length) * length, 0, length);\r\n};\r\nexports.Repeat = Repeat;\r\nvar PingPong = function (t, length) {\r\n    t = Repeat(t, length * 2);\r\n    return length - Math.abs(t - length);\r\n};\r\nexports.PingPong = PingPong;\r\nvar Lerp = function (a, b, t) {\r\n    return a + (b - a) * t;\r\n};\r\nexports.Lerp = Lerp;\r\nvar AngleToRadians = function (degrees) {\r\n    return degrees * (Math.PI / 180);\r\n};\r\nexports.AngleToRadians = AngleToRadians;\r\n\n\n//# sourceURL=webpack://canvaslib/./src/math/Mathf.ts?");

/***/ }),

/***/ "./src/math/Vector.ts":
/*!****************************!*\
  !*** ./src/math/Vector.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Mathf_1 = __webpack_require__(/*! ./Mathf */ \"./src/math/Mathf.ts\");\r\nvar Vector = /** @class */ (function () {\r\n    function Vector(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    /**\r\n     * Check whether { x } is of type Vector or number.\r\n     */\r\n    Vector.isVector = function (x) {\r\n        return x instanceof Vector;\r\n    };\r\n    Vector.Dist = function (a, b) {\r\n        var squaredSum = Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);\r\n        return Math.sqrt(squaredSum);\r\n    };\r\n    Vector.Dot = function (a, b) {\r\n        return a.x * b.x + a.y * b.y;\r\n    };\r\n    Vector.Magnitude = function (vector) {\r\n        return Math.sqrt(vector.x * vector.x + vector.y * vector.y);\r\n    };\r\n    Vector.MagnitudeSquared = function (vector) {\r\n        return vector.x * vector.x + vector.y * vector.y;\r\n    };\r\n    Vector.Normalize = function (vector) {\r\n        var magnitude = Vector.Magnitude(vector);\r\n        if (magnitude === 0) {\r\n            return Vector.zero;\r\n        }\r\n        return new Vector(vector.x / magnitude, vector.y / magnitude);\r\n    };\r\n    Vector.Lerp = function (a, b, t) {\r\n        t = (0, Mathf_1.Clamp01)(t);\r\n        return new Vector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);\r\n    };\r\n    // #region arithmetic\r\n    Vector.Add = function (a, b) {\r\n        if (!Vector.isVector(b)) {\r\n            b = b;\r\n            return new Vector(a.x + b, a.y + b);\r\n        }\r\n        b = b;\r\n        return new Vector(a.x + b.x, a.y + b.x);\r\n    };\r\n    Vector.Sub = function (a, b) {\r\n        if (!Vector.isVector(b)) {\r\n            console.log(b);\r\n            b = b;\r\n            return new Vector(a.x - b, a.y - b);\r\n        }\r\n        b = b;\r\n        return new Vector(a.x - b.x, a.y - b.x);\r\n    };\r\n    Vector.Multiply = function (a, b) {\r\n        if (!Vector.isVector(b)) {\r\n            b = b;\r\n            return new Vector(a.x * b, a.y * b);\r\n        }\r\n        b = b;\r\n        return new Vector(a.x * b.x, a.y * b.x);\r\n    };\r\n    Vector.Divide = function (a, b) {\r\n        if (!Vector.isVector(b)) {\r\n            b = b;\r\n            return new Vector(a.x - b, a.y - b);\r\n        }\r\n        b = b;\r\n        return new Vector(a.x - b.x, a.y - b.x);\r\n    };\r\n    Vector.zero = new Vector(0, 0);\r\n    Vector.up = new Vector(0, 0);\r\n    Vector.down = new Vector(0, 0);\r\n    Vector.left = new Vector(0, 0);\r\n    Vector.right = new Vector(0, 0);\r\n    return Vector;\r\n}());\r\nexports[\"default\"] = Vector;\r\n\n\n//# sourceURL=webpack://canvaslib/./src/math/Vector.ts?");

/***/ }),

/***/ "./src/math/Vertex.ts":
/*!****************************!*\
  !*** ./src/math/Vertex.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __importDefault(__webpack_require__(/*! ./Vector */ \"./src/math/Vector.ts\"));\r\nvar Vertex = /** @class */ (function () {\r\n    function Vertex(x, y, index, isInternal) {\r\n        if (isInternal === void 0) { isInternal = false; }\r\n        this.x = x;\r\n        this.y = y;\r\n        this.index = index;\r\n        this.isInternal = isInternal;\r\n    }\r\n    Vertex.getCenter = function (vertices) {\r\n        var x_list = [];\r\n        var y_list = [];\r\n        for (var _i = 0, vertices_1 = vertices; _i < vertices_1.length; _i++) {\r\n            var vertex = vertices_1[_i];\r\n            x_list.push(vertex.x);\r\n            y_list.push(vertex.y);\r\n        }\r\n        var len = vertices.length;\r\n        var _x = x_list.reduce(function (a, b) { return a + b; }, 0) / len;\r\n        var _y = y_list.reduce(function (a, b) { return a + b; }, 0) / len;\r\n        return new Vector_1.default(_x, _y);\r\n    };\r\n    Vertex.Translate = function (vertices, vector, scalar) {\r\n        if (scalar === void 0) { scalar = 1; }\r\n        if (scalar) {\r\n            for (var i = 0; i < Vertex.length; i++) {\r\n                vertices[i].x += vector.x * scalar;\r\n                vertices[i].y += vector.y * scalar;\r\n            }\r\n        }\r\n        else {\r\n            for (var i = 0; i < Vertex.length; i++) {\r\n                vertices[i].x += vector.x;\r\n                vertices[i].y += vector.y;\r\n            }\r\n        }\r\n    };\r\n    return Vertex;\r\n}());\r\nexports[\"default\"] = Vertex;\r\n\n\n//# sourceURL=webpack://canvaslib/./src/math/Vertex.ts?");

/***/ }),

/***/ "./src/object/GameObject.ts":
/*!**********************************!*\
  !*** ./src/object/GameObject.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __importDefault(__webpack_require__(/*! ../math/Vector */ \"./src/math/Vector.ts\"));\r\nvar util_1 = __webpack_require__(/*! ../util/util */ \"./src/util/util.ts\");\r\nvar Color_1 = __importDefault(__webpack_require__(/*! ../util/Color */ \"./src/util/Color.ts\"));\r\nvar Vertex_1 = __importDefault(__webpack_require__(/*! ../math/Vertex */ \"./src/math/Vertex.ts\"));\r\nvar GameObject = /** @class */ (function () {\r\n    function GameObject(name, position, vertices, options) {\r\n        var _a, _b;\r\n        this.components = [];\r\n        this._isActive = true;\r\n        this.strokeColor = new Color_1.default(\"#ff00ff\");\r\n        this.fillColor = new Color_1.default(\"#ff00ff\");\r\n        // Transform\r\n        this._position = Vector_1.default.zero;\r\n        this._rotation = Vector_1.default.zero;\r\n        this._localPosition = Vector_1.default.zero;\r\n        this._localRotation = Vector_1.default.zero;\r\n        this.children = [];\r\n        this.name = name;\r\n        this.uuid = (0, util_1.getUUID)();\r\n        this.vertices = vertices !== null && vertices !== void 0 ? vertices : [];\r\n        this.position = position !== null && position !== void 0 ? position : Vector_1.default.zero;\r\n        if (options) {\r\n            this.strokeColor = (_a = options.strokeColor) !== null && _a !== void 0 ? _a : this.strokeColor;\r\n            this.fillColor = (_b = options.fillColor) !== null && _b !== void 0 ? _b : this.fillColor;\r\n        }\r\n    }\r\n    Object.defineProperty(GameObject.prototype, \"center\", {\r\n        get: function () {\r\n            var center = Vertex_1.default.getCenter(this.vertices);\r\n            return new Vector_1.default(this.position.x + center.x, this.position.y + center.y);\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(GameObject.prototype, \"position\", {\r\n        get: function () {\r\n            if (this.parent === undefined) {\r\n                return this._position;\r\n            }\r\n            else {\r\n                return this.localPositionToWorld(this._localPosition, this.parent);\r\n            }\r\n        },\r\n        set: function (value) {\r\n            this._position = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(GameObject.prototype, \"localPosition\", {\r\n        // todo: add local position\r\n        get: function () {\r\n            if (this.parent === undefined) {\r\n                return this._position;\r\n            }\r\n            else {\r\n                return this._localPosition;\r\n            }\r\n        },\r\n        // todo: add local position\r\n        set: function (val) {\r\n            this._localPosition = val;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(GameObject.prototype, \"localRotation\", {\r\n        // todo: add local position\r\n        get: function () {\r\n            if (this.parent === undefined) {\r\n                return this._rotation;\r\n            }\r\n            else {\r\n                return this._localRotation;\r\n            }\r\n        },\r\n        // todo: add local position\r\n        set: function (val) {\r\n            this._localRotation = val;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    GameObject.prototype.localPositionToWorld = function (local, parent) {\r\n        var worldPos = new Vector_1.default(parent.position.x + local.x, parent.position.y + local.y);\r\n        return worldPos;\r\n    };\r\n    GameObject.prototype.worldToLocalPosition = function (world) {\r\n        console.log(world);\r\n        return new Vector_1.default(0, 0);\r\n    };\r\n    GameObject.prototype.SetPosition = function (vec) {\r\n        this._position = vec;\r\n    };\r\n    GameObject.prototype.SetRotation = function (vec) {\r\n        this._rotation = vec;\r\n    };\r\n    GameObject.prototype.SetParent = function (gameObject, keepWorldPosition) {\r\n        if (keepWorldPosition === void 0) { keepWorldPosition = true; }\r\n        this.parent = gameObject;\r\n        gameObject.AddChild(this);\r\n        var parentPos = this.parent.position;\r\n        if (keepWorldPosition) {\r\n            this.localPosition = new Vector_1.default(this._position.x - parentPos.x, this._position.y - parentPos.y);\r\n        }\r\n    };\r\n    GameObject.prototype.AddChild = function (gameObject) {\r\n        this.children.push(gameObject);\r\n    };\r\n    // COMPONENT STUFF\r\n    GameObject.prototype.AddComponent = function (comp) {\r\n        this.components.push(comp);\r\n    };\r\n    GameObject.prototype.GetComponent = function (type) {\r\n        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {\r\n            var comp = _a[_i];\r\n            if (comp.type === type) {\r\n                return comp;\r\n            }\r\n        }\r\n    };\r\n    GameObject.prototype.GetComponents = function () {\r\n        return this.components;\r\n    };\r\n    Object.defineProperty(GameObject.prototype, \"hasVertices\", {\r\n        get: function () {\r\n            return this.vertices.length > 0;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(GameObject.prototype, \"isActive\", {\r\n        get: function () {\r\n            return this._isActive;\r\n        },\r\n        set: function (val) {\r\n            this._isActive = val;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return GameObject;\r\n}());\r\nexports[\"default\"] = GameObject;\r\n\n\n//# sourceURL=webpack://canvaslib/./src/object/GameObject.ts?");

/***/ }),

/***/ "./src/render/Render.ts":
/*!******************************!*\
  !*** ./src/render/Render.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar core_1 = __webpack_require__(/*! ../core */ \"./src/core.ts\");\r\nvar Color_1 = __importDefault(__webpack_require__(/*! ../util/Color */ \"./src/util/Color.ts\"));\r\nvar Render = /** @class */ (function () {\r\n    function Render(options) {\r\n        var _a, _b, _c, _d, _e, _f;\r\n        this.fps = 60;\r\n        this.width = 100;\r\n        this.height = 100;\r\n        this.hasBounds = false;\r\n        this.convex = true;\r\n        this.bounds = {\r\n            min: {\r\n                width: 0,\r\n                height: 0,\r\n            },\r\n            max: {\r\n                width: 100,\r\n                height: 100,\r\n            },\r\n        };\r\n        this.timing = {\r\n            delta: 0,\r\n            lastTime: 0,\r\n        };\r\n        // todo: This should be a color object\r\n        this.backgroundColor = new Color_1.default(\"#202020\");\r\n        this.fps = (_a = options.fps) !== null && _a !== void 0 ? _a : this.fps;\r\n        this.width = (_b = options.width) !== null && _b !== void 0 ? _b : this.width;\r\n        this.height = (_c = options.height) !== null && _c !== void 0 ? _c : this.height;\r\n        this.hasBounds = (_d = options.hasBounds) !== null && _d !== void 0 ? _d : this.hasBounds;\r\n        this.backgroundColor = (_e = options.backgroundColor) !== null && _e !== void 0 ? _e : this.backgroundColor;\r\n        this.canvas = (_f = this.canvas) !== null && _f !== void 0 ? _f : this._CreateCanvas();\r\n        this.ctx = this.canvas.getContext(\"2d\");\r\n        this.objects = [];\r\n        // Canvas creation\r\n        var element = (document.getElementById(\"container\"));\r\n        element.appendChild(this.canvas);\r\n        this.canvas.style.border = \"1px solid black\";\r\n        if (options.center) {\r\n            element.style.textAlign = \"center\";\r\n            this.canvas.style.display = \"inline\";\r\n        }\r\n    }\r\n    Render.prototype.AddGameObject = function (gameObject) {\r\n        this.objects.push(gameObject);\r\n    };\r\n    Render.prototype.Run = function () {\r\n        var _this = this;\r\n        var loop = function (ms) {\r\n            window.requestAnimationFrame(loop);\r\n            _this._UpdateTiming(ms);\r\n            _this.World(ms);\r\n        };\r\n        loop(0);\r\n    };\r\n    Render.prototype.World = function (ms) {\r\n        this.ctx.fillStyle = this.backgroundColor.hexColor;\r\n        this.ctx.fillRect(0, 0, this.width, this.height);\r\n        if (this.objects.length <= 0)\r\n            return;\r\n        if (this.convex) {\r\n            this.DrawConvex(this.objects);\r\n        }\r\n        else {\r\n            this.DrawWireframes(this.objects);\r\n        }\r\n    };\r\n    Render.prototype.DrawWireframes = function (objects) {\r\n        var c = this.ctx;\r\n        // render all objects\r\n        for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {\r\n            var obj = objects_1[_i];\r\n            if (!obj.isActive)\r\n                continue;\r\n            if (!obj.hasVertices)\r\n                continue;\r\n            c.translate(obj.position.x, obj.position.y);\r\n            c.beginPath();\r\n            var points = this.DrawPolygon(c, obj, true);\r\n            c.closePath();\r\n            c.strokeStyle = obj.strokeColor.hexColor;\r\n            c.stroke();\r\n            if (points)\r\n                this.drawPoints(points);\r\n            c.setTransform(1, 0, 0, 1, 0, 0);\r\n        }\r\n    };\r\n    Render.prototype.DrawConvex = function (objects) {\r\n        var c = this.ctx;\r\n        //c.beginPath();\r\n        // render all objects\r\n        for (var _i = 0, objects_2 = objects; _i < objects_2.length; _i++) {\r\n            var obj = objects_2[_i];\r\n            if (!obj.isActive)\r\n                continue;\r\n            if (!obj.hasVertices)\r\n                continue;\r\n            c.translate(obj.position.x, obj.position.y);\r\n            c.beginPath();\r\n            this.DrawPolygon(c, obj);\r\n            c.closePath();\r\n            c.fillStyle = obj.fillColor.hexColor;\r\n            c.fill();\r\n            c.setTransform(1, 0, 0, 1, 0, 0);\r\n        }\r\n    };\r\n    Render.prototype.DrawPolygon = function (c, obj, showPoints) {\r\n        if (showPoints === void 0) { showPoints = false; }\r\n        var points = [];\r\n        c.moveTo(obj.vertices[0].x, obj.vertices[0].y);\r\n        if (showPoints)\r\n            points.push(new core_1.Vector(obj.vertices[0].x, obj.vertices[0].y));\r\n        for (var j = 1; j < obj.vertices.length; j++) {\r\n            if (!obj.vertices[j - 1].isInternal) {\r\n                c.lineTo(obj.vertices[j].x, obj.vertices[j].y);\r\n            }\r\n            else {\r\n                c.moveTo(obj.vertices[j].x, obj.vertices[j].y);\r\n            }\r\n            if (showPoints)\r\n                points.push(new core_1.Vector(obj.vertices[j].x, obj.vertices[j].y));\r\n            if (obj.vertices[j].isInternal) {\r\n                c.moveTo(obj.vertices[(j + 1) % obj.vertices.length].x, obj.vertices[(j + 1) % obj.vertices.length].y);\r\n            }\r\n        }\r\n        c.lineTo(obj.vertices[0].x, obj.vertices[0].y);\r\n        if (showPoints)\r\n            return points;\r\n    };\r\n    Render.prototype.drawPoints = function (points) {\r\n        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {\r\n            var point = points_1[_i];\r\n            this.ctx.fillStyle = \"#000\";\r\n            this.ctx.beginPath();\r\n            this.ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);\r\n            this.ctx.fill();\r\n        }\r\n    };\r\n    Render.prototype._UpdateTiming = function (ms) {\r\n        var timing = this.timing;\r\n        timing.delta = ms - timing.lastTime;\r\n    };\r\n    Render.prototype._CreateCanvas = function () {\r\n        var canvas = document.createElement(\"canvas\");\r\n        canvas.width = this.width;\r\n        canvas.height = this.height;\r\n        canvas.oncontextmenu = function () {\r\n            return false;\r\n        };\r\n        canvas.onselectstart = function () {\r\n            return false;\r\n        };\r\n        return canvas;\r\n    };\r\n    return Render;\r\n}());\r\nexports[\"default\"] = Render;\r\n\n\n//# sourceURL=webpack://canvaslib/./src/render/Render.ts?");

/***/ }),

/***/ "./src/test.ts":
/*!*********************!*\
  !*** ./src/test.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar core_1 = __webpack_require__(/*! ./core */ \"./src/core.ts\");\r\nvar Engine_1 = __importDefault(__webpack_require__(/*! ./core/Engine */ \"./src/core/Engine.ts\"));\r\nvar Input_1 = __importDefault(__webpack_require__(/*! ./input/Input */ \"./src/input/Input.ts\"));\r\nvar Render_1 = __importDefault(__webpack_require__(/*! ./render/Render */ \"./src/render/Render.ts\"));\r\nvar Color_1 = __importDefault(__webpack_require__(/*! ./util/Color */ \"./src/util/Color.ts\"));\r\nvar engineOptions = {};\r\nvar renderOptions = {\r\n    fps: 60,\r\n    width: 600,\r\n    height: 600,\r\n    hasBounds: false,\r\n    center: true,\r\n};\r\nvar _Engine;\r\nvar _Render;\r\nvar gameLoop = function () {\r\n    _Engine.Update();\r\n    if (Input_1.default.getButtonDown(\"Forward\")) {\r\n        console.log(\"forward down\");\r\n    }\r\n    if (Input_1.default.getButtonUp(\"Forward\")) {\r\n        console.log(\"forward up\");\r\n    }\r\n};\r\nwindow.onload = function () {\r\n    _Engine = new Engine_1.default(engineOptions);\r\n    _Render = new Render_1.default(renderOptions);\r\n    _Engine.render = _Render;\r\n    var obj = core_1.Primitives.Circle(300, 300, 100, {\r\n        fillColor: new Color_1.default(\"#3464eb\"),\r\n    });\r\n    _Engine.AddGameObject(obj);\r\n    console.log(obj);\r\n    Input_1.default.addListener();\r\n    Input_1.default.addMapping(\"Forward\", \"KeyW\");\r\n    _Render.Run();\r\n    setInterval(gameLoop, 1000 / 60);\r\n};\r\n\n\n//# sourceURL=webpack://canvaslib/./src/test.ts?");

/***/ }),

/***/ "./src/util/Color.ts":
/*!***************************!*\
  !*** ./src/util/Color.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Color = /** @class */ (function () {\r\n    function Color(color) {\r\n        if (color)\r\n            this.setColor(color);\r\n    }\r\n    Object.defineProperty(Color.prototype, \"color\", {\r\n        set: function (val) {\r\n            this.setColor(val);\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Color.prototype, \"hexColor\", {\r\n        get: function () {\r\n            return this._hexColor;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Color.prototype, \"rgbColor\", {\r\n        get: function () {\r\n            return this._rgbColor;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Color.prototype.setColor = function (val) {\r\n        if (/^#[0-9A-F]{6}$/i.test(val)) {\r\n            this._hexColor = val;\r\n            this._rgbColor = Color.rgbFromHex(val);\r\n        }\r\n        else if (Color.isRgb(val)) {\r\n            this._hexColor = Color.hexFromRgb(val);\r\n            this._rgbColor = val;\r\n        }\r\n    };\r\n    Color.rgbFromHex = function (hex) {\r\n        hex = hex.split(\"#\")[1];\r\n        var rgbLst = [];\r\n        for (var i = 0; i < hex.length; i += 2) {\r\n            var hexCode = hex.slice(i, i + 2);\r\n            var dec = parseInt(hexCode, 16);\r\n            rgbLst.push(dec);\r\n        }\r\n        var r = rgbLst[0], g = rgbLst[1], b = rgbLst[2];\r\n        var str = \"rgb(\" + r + \", \" + g + \", \" + b + \")\";\r\n        return str;\r\n    };\r\n    Color.hexFromRgb = function (rgb) {\r\n        var rgbVals = rgb.split(\"(\")[1].split(\")\")[0];\r\n        var _a = rgbVals.split(\",\"), r = _a[0], g = _a[1], b = _a[2];\r\n        r = parseInt(r.replace(\" \", \"\")).toString(16);\r\n        g = parseInt(g.replace(\" \", \"\")).toString(16);\r\n        b = parseInt(b.replace(\" \", \"\")).toString(16);\r\n        var str = \"#\" + r + g + b;\r\n        return str;\r\n    };\r\n    Color.isRgb = function (val) {\r\n        return /^(rgb|hsl)(a?)[(]\\s*([\\d.]+\\s*%?)\\s*,\\s*([\\d.]+\\s*%?)\\s*,\\s*([\\d.]+\\s*%?)\\s*(?:,\\s*([\\d.]+)\\s*)?[)]$/.test(val);\r\n    };\r\n    return Color;\r\n}());\r\nexports[\"default\"] = Color;\r\n\n\n//# sourceURL=webpack://canvaslib/./src/util/Color.ts?");

/***/ }),

/***/ "./src/util/util.ts":
/*!**************************!*\
  !*** ./src/util/util.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getUUID = void 0;\r\nvar getUUID = function () {\r\n    var uuid = window.URL.createObjectURL(new Blob([])).substr(-36);\r\n    return uuid;\r\n};\r\nexports.getUUID = getUUID;\r\n\n\n//# sourceURL=webpack://canvaslib/./src/util/util.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/test.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});