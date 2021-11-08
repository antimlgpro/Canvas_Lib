/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/Engine.ts":
/*!****************************!*\
  !*** ./src/core/Engine.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __importDefault(__webpack_require__(/*! ../math/Vector */ \"./src/math/Vector.ts\"));\r\nvar Engine = /** @class */ (function () {\r\n    /* eslint-disable-next-line */\r\n    function Engine(options) {\r\n        this.timing = {\r\n            delta: 0,\r\n            timestamp: 0,\r\n            lastDelta: 0,\r\n            lastElapsed: 0,\r\n        };\r\n        this.gravity = new Vector_1.default(0, 1);\r\n        this.gravityScale = 0.001;\r\n        // todo add options\r\n        this.gameObjects = [];\r\n    }\r\n    Engine.prototype.AddGameObject = function (gameObject) {\r\n        this.gameObjects.push(gameObject);\r\n        this.render.AddGameObject(gameObject);\r\n    };\r\n    Engine.prototype.Update = function (delta) {\r\n        var startTime = Date.now();\r\n        var deltaTime = delta || 1000 / 60;\r\n        this.timing.delta = deltaTime;\r\n        this.timing.timestamp += deltaTime;\r\n        this.timing.lastDelta = deltaTime;\r\n        for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {\r\n            var go = _a[_i];\r\n            var comps = go.GetComponents();\r\n            for (var _b = 0, comps_1 = comps; _b < comps_1.length; _b++) {\r\n                var comp = comps_1[_b];\r\n                comp.Update(deltaTime);\r\n            }\r\n        }\r\n        this.timing.lastElapsed = Date.now() - startTime;\r\n    };\r\n    return Engine;\r\n}());\r\nexports[\"default\"] = Engine;\r\n\n\n//# sourceURL=webpack://canvas-lib/./src/core/Engine.ts?");

/***/ }),

/***/ "./src/factory/Primitives.ts":
/*!***********************************!*\
  !*** ./src/factory/Primitives.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __importDefault(__webpack_require__(/*! ../math/Vector */ \"./src/math/Vector.ts\"));\r\nvar Vertices_1 = __importDefault(__webpack_require__(/*! ../math/Vertices */ \"./src/math/Vertices.ts\"));\r\nvar GameObject_1 = __importDefault(__webpack_require__(/*! ../object/GameObject */ \"./src/object/GameObject.ts\"));\r\nvar Primitives = /** @class */ (function () {\r\n    function Primitives() {\r\n    }\r\n    Primitives.Rectangle = function (x, y, width, height, options) {\r\n        var label = \"Rectangle\";\r\n        var position = new Vector_1.default(x, y);\r\n        var vertices = Vertices_1.default.FromPath(\"L 0 0 L \" + width + \" 0 L \" + width + \" \" + height + \" L 0 \" + height);\r\n        if (vertices === null)\r\n            return;\r\n        return new GameObject_1.default(label, position, vertices, options);\r\n    };\r\n    return Primitives;\r\n}());\r\nexports[\"default\"] = Primitives;\r\n\n\n//# sourceURL=webpack://canvas-lib/./src/factory/Primitives.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Engine_1 = __importDefault(__webpack_require__(/*! ./core/Engine */ \"./src/core/Engine.ts\"));\r\nvar Primitives_1 = __importDefault(__webpack_require__(/*! ./factory/Primitives */ \"./src/factory/Primitives.ts\"));\r\nvar Render_1 = __importDefault(__webpack_require__(/*! ./render/Render */ \"./src/render/Render.ts\"));\r\nvar engineOptions = {};\r\nvar renderOptions = {\r\n    fps: 60,\r\n    width: 600,\r\n    height: 600,\r\n    hasBounds: false,\r\n    center: true,\r\n    backgroundColor: \"#202020\",\r\n};\r\nvar _Engine;\r\nvar _Render;\r\nvar gameLoop = function () {\r\n    _Engine.Update();\r\n};\r\nwindow.onload = function () {\r\n    _Engine = new Engine_1.default(engineOptions);\r\n    _Render = new Render_1.default(renderOptions);\r\n    _Engine.render = _Render;\r\n    var options = {\r\n        fillColor: \"#cb0020\",\r\n    };\r\n    var a = Primitives_1.default.Rectangle(200, 300, 100, 100, options);\r\n    _Engine.AddGameObject(a);\r\n    _Render.Run();\r\n    setInterval(gameLoop, 1000 / 60);\r\n};\r\n\n\n//# sourceURL=webpack://canvas-lib/./src/index.ts?");

/***/ }),

/***/ "./src/math/Mathf.ts":
/*!***************************!*\
  !*** ./src/math/Mathf.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Mathf = /** @class */ (function () {\r\n    function Mathf() {\r\n    }\r\n    Mathf.Clamp = function (value, min, max) {\r\n        return Math.max(min, Math.min(value, max));\r\n    };\r\n    Mathf.Clamp01 = function (value) {\r\n        if (value < 0) {\r\n            return 0;\r\n        }\r\n        else if (value > 1) {\r\n            return 1;\r\n        }\r\n        else {\r\n            return value;\r\n        }\r\n    };\r\n    Mathf.Repeat = function (t, length) {\r\n        return Mathf.Clamp(t - Math.floor(t / length) * length, 0, length);\r\n    };\r\n    Mathf.PingPong = function (t, length) {\r\n        t = Mathf.Repeat(t, length * 2);\r\n        return length - Math.abs(t - length);\r\n    };\r\n    Mathf.Lerp = function (a, b, t) {\r\n        return a + (b - a) * t;\r\n    };\r\n    return Mathf;\r\n}());\r\nexports[\"default\"] = Mathf;\r\n\n\n//# sourceURL=webpack://canvas-lib/./src/math/Mathf.ts?");

/***/ }),

/***/ "./src/math/Vector.ts":
/*!****************************!*\
  !*** ./src/math/Vector.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Mathf_1 = __importDefault(__webpack_require__(/*! ./Mathf */ \"./src/math/Mathf.ts\"));\r\nvar Vector = /** @class */ (function () {\r\n    function Vector(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    /**\r\n     * Check whether { x } is of type Vector or number.\r\n     */\r\n    Vector.isVector = function (x) {\r\n        return x instanceof Vector;\r\n    };\r\n    Vector.Dist = function (a, b) {\r\n        var squaredSum = Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);\r\n        return Math.sqrt(squaredSum);\r\n    };\r\n    Vector.Dot = function (a, b) {\r\n        return a.x * b.x + a.y * b.y;\r\n    };\r\n    Vector.Magnitude = function (vector) {\r\n        return Math.sqrt(vector.x * vector.x + vector.y * vector.y);\r\n    };\r\n    Vector.MagnitudeSquared = function (vector) {\r\n        return vector.x * vector.x + vector.y * vector.y;\r\n    };\r\n    Vector.Normalize = function (vector) {\r\n        var magnitude = Vector.Magnitude(vector);\r\n        if (magnitude === 0) {\r\n            return Vector.zero;\r\n        }\r\n        return new Vector(vector.x / magnitude, vector.y / magnitude);\r\n    };\r\n    Vector.Lerp = function (a, b, t) {\r\n        t = Mathf_1.default.Clamp01(t);\r\n        return new Vector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);\r\n    };\r\n    // #region arithmetic\r\n    Vector.Add = function (a, b) {\r\n        if (!Vector.isVector(b)) {\r\n            b = b;\r\n            return new Vector(a.x + b, a.y + b);\r\n        }\r\n        b = b;\r\n        return new Vector(a.x + b.x, a.y + b.x);\r\n    };\r\n    Vector.Sub = function (a, b) {\r\n        if (!Vector.isVector(b)) {\r\n            console.log(b);\r\n            b = b;\r\n            return new Vector(a.x - b, a.y - b);\r\n        }\r\n        b = b;\r\n        return new Vector(a.x - b.x, a.y - b.x);\r\n    };\r\n    Vector.Multiply = function (a, b) {\r\n        if (!Vector.isVector(b)) {\r\n            b = b;\r\n            return new Vector(a.x * b, a.y * b);\r\n        }\r\n        b = b;\r\n        return new Vector(a.x * b.x, a.y * b.x);\r\n    };\r\n    Vector.Divide = function (a, b) {\r\n        if (!Vector.isVector(b)) {\r\n            b = b;\r\n            return new Vector(a.x - b, a.y - b);\r\n        }\r\n        b = b;\r\n        return new Vector(a.x - b.x, a.y - b.x);\r\n    };\r\n    Vector.zero = new Vector(0, 0);\r\n    Vector.up = new Vector(0, 0);\r\n    Vector.down = new Vector(0, 0);\r\n    Vector.left = new Vector(0, 0);\r\n    Vector.right = new Vector(0, 0);\r\n    return Vector;\r\n}());\r\nexports[\"default\"] = Vector;\r\n\n\n//# sourceURL=webpack://canvas-lib/./src/math/Vector.ts?");

/***/ }),

/***/ "./src/math/Vertices.ts":
/*!******************************!*\
  !*** ./src/math/Vertices.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __importDefault(__webpack_require__(/*! ./Vector */ \"./src/math/Vector.ts\"));\r\nvar Vertices = /** @class */ (function () {\r\n    function Vertices(x, y, index, body, isInternal) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.index = index;\r\n        this.body = body;\r\n        this.isInternal = isInternal;\r\n    }\r\n    Vertices.Create = function (points) {\r\n        var vertices = [];\r\n        for (var i = 0; i < points.length; i++) {\r\n            var point = points[i];\r\n            var vertex = new Vertices(point.x, point.y, i, undefined, false);\r\n            vertices.push(vertex);\r\n        }\r\n        return vertices;\r\n    };\r\n    Vertices.FromPath = function (path) {\r\n        var points = [];\r\n        var pathPattern = /L?\\s*([-\\d.e]+)[\\s,]*([-\\d.e]+)*/gi;\r\n        var matches = path.match(pathPattern);\r\n        if (matches === null)\r\n            return null;\r\n        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {\r\n            var a = matches_1[_i];\r\n            var _a = a.split(\" \"), x = _a[1], y = _a[2];\r\n            points.push(new Vector_1.default(parseFloat(x), parseFloat(y)));\r\n        }\r\n        return Vertices.Create(points);\r\n    };\r\n    Vertices.Translate = function (vertices, vector, scalar) {\r\n        if (scalar === void 0) { scalar = 1; }\r\n        if (scalar) {\r\n            for (var i = 0; i < vertices.length; i++) {\r\n                vertices[i].x += vector.x * scalar;\r\n                vertices[i].y += vector.y * scalar;\r\n            }\r\n        }\r\n        else {\r\n            for (var i = 0; i < vertices.length; i++) {\r\n                vertices[i].x += vector.x;\r\n                vertices[i].y += vector.y;\r\n            }\r\n        }\r\n    };\r\n    return Vertices;\r\n}());\r\nexports[\"default\"] = Vertices;\r\n\n\n//# sourceURL=webpack://canvas-lib/./src/math/Vertices.ts?");

/***/ }),

/***/ "./src/object/GameObject.ts":
/*!**********************************!*\
  !*** ./src/object/GameObject.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __importDefault(__webpack_require__(/*! ../math/Vector */ \"./src/math/Vector.ts\"));\r\nvar util_1 = __webpack_require__(/*! ../util/util */ \"./src/util/util.ts\");\r\nvar GameObject = /** @class */ (function () {\r\n    function GameObject(name, position, vertices, options) {\r\n        var _a, _b;\r\n        this.components = [];\r\n        this.strokeColor = \"#ff00ff\";\r\n        this.fillColor = \"#ff00ff\";\r\n        // Transform\r\n        this.position = Vector_1.default.zero;\r\n        this.rotation = Vector_1.default.zero;\r\n        this.children = [];\r\n        this.name = name;\r\n        this.uuid = (0, util_1.getUUID)();\r\n        this.vertices = vertices !== null && vertices !== void 0 ? vertices : [];\r\n        this.position = position !== null && position !== void 0 ? position : Vector_1.default.zero;\r\n        if (options) {\r\n            this.strokeColor = (_a = options.strokeColor) !== null && _a !== void 0 ? _a : this.strokeColor;\r\n            this.fillColor = (_b = options.fillColor) !== null && _b !== void 0 ? _b : this.fillColor;\r\n        }\r\n    }\r\n    // COMPONENT STUFF\r\n    GameObject.prototype.AddComponent = function (comp) {\r\n        this.components.push(comp);\r\n    };\r\n    GameObject.prototype.GetComponent = function (type) {\r\n        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {\r\n            var comp = _a[_i];\r\n            if (comp.type === type) {\r\n                return comp;\r\n            }\r\n        }\r\n    };\r\n    GameObject.prototype.GetComponents = function () {\r\n        return this.components;\r\n    };\r\n    Object.defineProperty(GameObject.prototype, \"canRender\", {\r\n        get: function () {\r\n            return this.vertices !== [];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return GameObject;\r\n}());\r\nexports[\"default\"] = GameObject;\r\n\n\n//# sourceURL=webpack://canvas-lib/./src/object/GameObject.ts?");

/***/ }),

/***/ "./src/render/Render.ts":
/*!******************************!*\
  !*** ./src/render/Render.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Render = /** @class */ (function () {\r\n    function Render(options) {\r\n        var _a, _b, _c, _d, _e, _f;\r\n        this.fps = 60;\r\n        this.width = 100;\r\n        this.height = 100;\r\n        this.hasBounds = false;\r\n        this.convex = true;\r\n        this.bounds = {\r\n            min: {\r\n                width: 0,\r\n                height: 0,\r\n            },\r\n            max: {\r\n                width: 100,\r\n                height: 100,\r\n            },\r\n        };\r\n        this.timing = {\r\n            delta: 0,\r\n            lastTime: 0,\r\n        };\r\n        // todo: This should be a color object\r\n        this.backgroundColor = \"#202020\";\r\n        this.fps = (_a = options.fps) !== null && _a !== void 0 ? _a : this.fps;\r\n        this.width = (_b = options.width) !== null && _b !== void 0 ? _b : this.width;\r\n        this.height = (_c = options.height) !== null && _c !== void 0 ? _c : this.height;\r\n        this.hasBounds = (_d = options.hasBounds) !== null && _d !== void 0 ? _d : this.hasBounds;\r\n        this.backgroundColor = (_e = options.backgroundColor) !== null && _e !== void 0 ? _e : this.backgroundColor;\r\n        this.canvas = (_f = this.canvas) !== null && _f !== void 0 ? _f : this._CreateCanvas();\r\n        this.ctx = this.canvas.getContext(\"2d\");\r\n        this.objects = [];\r\n        // Canvas creation\r\n        var element = (document.getElementById(\"container\"));\r\n        element.appendChild(this.canvas);\r\n        this.canvas.style.border = \"1px solid black\";\r\n        if (options.center) {\r\n            element.style.textAlign = \"center\";\r\n            this.canvas.style.display = \"inline\";\r\n        }\r\n    }\r\n    Render.prototype.AddGameObject = function (gameObject) {\r\n        this.objects.push(gameObject);\r\n    };\r\n    Render.prototype.Run = function () {\r\n        var _this = this;\r\n        var loop = function (ms) {\r\n            window.requestAnimationFrame(loop);\r\n            _this._UpdateTiming(ms);\r\n            _this.World(ms);\r\n        };\r\n        loop(0);\r\n    };\r\n    Render.prototype.World = function (ms) {\r\n        this.ctx.fillStyle = this.backgroundColor;\r\n        this.ctx.fillRect(0, 0, this.width, this.height);\r\n        if (this.convex) {\r\n            this.DrawConvex(this.objects);\r\n        }\r\n        else {\r\n            this.DrawWireframes(this.objects);\r\n        }\r\n    };\r\n    Render.prototype.DrawWireframes = function (objects) {\r\n        var c = this.ctx;\r\n        // render all objects\r\n        for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {\r\n            var obj = objects_1[_i];\r\n            if (!obj.canRender)\r\n                continue;\r\n            c.translate(obj.position.x, obj.position.y);\r\n            c.beginPath();\r\n            this.DrawPolygon(c, obj);\r\n            c.closePath();\r\n            c.strokeStyle = obj.strokeColor;\r\n            c.stroke();\r\n            c.setTransform(1, 0, 0, 1, 0, 0);\r\n        }\r\n    };\r\n    Render.prototype.DrawConvex = function (objects) {\r\n        var c = this.ctx;\r\n        //c.beginPath();\r\n        // render all objects\r\n        for (var _i = 0, objects_2 = objects; _i < objects_2.length; _i++) {\r\n            var obj = objects_2[_i];\r\n            if (!obj.canRender)\r\n                continue;\r\n            c.translate(obj.position.x, obj.position.y);\r\n            c.beginPath();\r\n            this.DrawPolygon(c, obj);\r\n            c.closePath();\r\n            c.fillStyle = obj.fillColor;\r\n            c.fill();\r\n            c.setTransform(1, 0, 0, 1, 0, 0);\r\n        }\r\n    };\r\n    Render.prototype.DrawPolygon = function (c, obj) {\r\n        c.moveTo(obj.vertices[0].x, obj.vertices[0].y);\r\n        for (var j = 1; j < obj.vertices.length; j++) {\r\n            if (!obj.vertices[j - 1].isInternal) {\r\n                c.lineTo(obj.vertices[j].x, obj.vertices[j].y);\r\n            }\r\n            else {\r\n                c.moveTo(obj.vertices[j].x, obj.vertices[j].y);\r\n            }\r\n            if (obj.vertices[j].isInternal) {\r\n                c.moveTo(obj.vertices[(j + 1) % obj.vertices.length].x, obj.vertices[(j + 1) % obj.vertices.length].y);\r\n            }\r\n        }\r\n        c.lineTo(obj.vertices[0].x, obj.vertices[0].y);\r\n    };\r\n    Render.prototype._UpdateTiming = function (ms) {\r\n        var timing = this.timing;\r\n        timing.delta = ms - timing.lastTime;\r\n    };\r\n    Render.prototype._CreateCanvas = function () {\r\n        var canvas = document.createElement(\"canvas\");\r\n        canvas.width = this.width;\r\n        canvas.height = this.height;\r\n        canvas.oncontextmenu = function () {\r\n            return false;\r\n        };\r\n        canvas.onselectstart = function () {\r\n            return false;\r\n        };\r\n        return canvas;\r\n    };\r\n    return Render;\r\n}());\r\nexports[\"default\"] = Render;\r\n\n\n//# sourceURL=webpack://canvas-lib/./src/render/Render.ts?");

/***/ }),

/***/ "./src/util/util.ts":
/*!**************************!*\
  !*** ./src/util/util.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getUUID = void 0;\r\nvar getUUID = function () {\r\n    var uuid = window.URL.createObjectURL(new Blob([])).substr(-36);\r\n    return uuid;\r\n};\r\nexports.getUUID = getUUID;\r\n\n\n//# sourceURL=webpack://canvas-lib/./src/util/util.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;