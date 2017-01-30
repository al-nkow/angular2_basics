/* Компоненты */

import { Component } from "@angular/core";

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
export class HelloAngular { // класс компонента - здесь можно добавить свойства компоненту
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