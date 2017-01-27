import { Component, NgModule } from "@angular/core";
// ангуляр может работать не только в браузере - но и на мобильных платформах
// чтобы определить что мы хотим использовать ангуляр в браузере  -
import { BrowserModule } from "@angular/platform-browser";
// мы хотим использовать ангуляр в браузере и компилировать его динамически прямо в нём
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// Аннотация компонента
@Component({
    selector: "hello-angular",
    template: `
        <div>
            <p>Hello {{ name }}!</p>
            <p>{{ arrNames }}</p>
            <ul>
                <!-- *ngFor - это аналог ng-repeat="name in arrNames" -->
                <li *ngFor="let item of arrNames">Hello, {{ item }}</li>
            </ul>
        </div>
    `
}) // здесь точка с запятой не ставится!
class HelloAngular { // класс компонента - здесь можно добавить свойства компоненту
    name: string; // название переменной - name, тип переменной - string
    arrNames: string[]; // тип - массив со строками

    // добавим классу конструктор
    // конструкторы выполняют начальную инициализацию объекта
    // то есть при создании класса первым делом будет запущена функция конструктор
    constructor() {
        this.name = 'Vasya'; // инициализируем ранее объявленную переменную
        this.arrNames = ['Anton', 'Stas', 'Petya', 'Tanya'];
    }
}

// соединим все модули с нашим компонентом
// NgModule также имеет аннотацию и класс
@NgModule({
    imports: [ BrowserModule ],
    declarations: [ HelloAngular ], // объявим наш компонент
    bootstrap: [ HelloAngular ], // загрузим наш компонент
})
class HelloAngularAppModule {} // дадим название нашему модулю

platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);