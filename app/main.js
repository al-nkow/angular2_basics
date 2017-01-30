/* Здесь запуск приложения */
"use strict";
// мы хотим использовать ангуляр в браузере и компилировать его динамически прямо в нём
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var module_1 = require("./reddit/module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.HelloAngularAppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(module_1.RedditAppModule);
//# sourceMappingURL=main.js.map