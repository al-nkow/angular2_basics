/* Компоненты */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
// Аннотация компонента
var HelloAngular = (function () {
    // добавим классу конструктор
    // конструкторы выполняют начальную инициализацию объекта
    // то есть при создании класса первым делом будет запущена функция конструктор
    function HelloAngular() {
        this.name = 'Vasya'; // инициализируем ранее объявленную переменную
        this.arrNames = ['Anton', 'Stas', 'Petya', 'Tanya'];
    }
    return HelloAngular;
}());
HelloAngular = __decorate([
    core_1.Component({
        selector: "hello-angular",
        template: "\n        <div>\n            <p>Hello {{ name }}!</p>\n            <p>{{ arrNames }}</p>\n            <ul>\n                <!-- *ngFor - \u044D\u0442\u043E \u0430\u043D\u0430\u043B\u043E\u0433 ng-repeat=\"name in arrNames\" -->\n                <li *ngFor=\"let item of arrNames\">Hello, {{ item }}</li>\n            </ul>\n        </div>\n    "
    }) // здесь точка с запятой не ставится!
    ,
    __metadata("design:paramtypes", [])
], HelloAngular);
exports.HelloAngular = HelloAngular;
//# sourceMappingURL=app.component.js.map