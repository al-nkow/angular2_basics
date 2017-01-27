import { Component, NgModule } from "@angular/core";
// ангуляр может работать не только в браузере - но и на мобильных платформах
// чтобы определить что мы хотим использовать ангуляр в браузере  -
import { BrowserModule } from "@angular/platform-browser";
// мы хотим использовать ангуляр в браузере и компилировать его динамически прямо в нём
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// Аннотация компонента
@Component({
    selector: "hello-angular",
    template: `<div>Hello Angular 2!</div>`
}) // здесь точка с запятой не ставится!
class HelloAngular {} // класс компонента

// соединим все модули с нашим компонентом
// NgModule также имеет аннотацию и класс
@NgModule({
    imports: [ BrowserModule ],
    declarations: [ HelloAngular ], // объявим наш компонент
    bootstrap: [ HelloAngular ], // загрузим наш компонент
})
class HelloAngularAppModule {} // дадим название нашему модулю

platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);