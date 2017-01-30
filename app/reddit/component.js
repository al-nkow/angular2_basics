"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// click dbclick keypress - без on (не on-click)
var RedditAppComponent = (function () {
    function RedditAppComponent() {
    }
    RedditAppComponent.prototype.addArticle = function (event, newtitle, newlink) {
        console.log(event, '--------', newtitle.value, newlink.value);
        return false;
    };
    return RedditAppComponent;
}());
RedditAppComponent = __decorate([
    core_1.Component({
        selector: 'reddit',
        styleUrls: ['./app/reddit/reddit.css'],
        template: "\n        <form action=\"\" class=\"ui large form segment\">\n            <h3 class=\"ui header\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443</h3>\n            <div class=\"field\">\n                <label for=\"title\">\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A</label>\n                <input type=\"text\" name=\"title\" #newtitle>\n            </div>\n            <div class=\"field\">\n                <label for=\"link\">\u0421\u0441\u044B\u043B\u043A\u0430</label>\n                <input type=\"text\" name=\"link\" #newlink>\n            </div>\n            <button class=\"ui positive right floated button\" (click)=\"addArticle($event, newtitle, newlink)\">\n                \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\n            </button>\n        </form>\n    "
    })
], RedditAppComponent);
exports.RedditAppComponent = RedditAppComponent;
//# sourceMappingURL=component.js.map