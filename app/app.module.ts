/* Здесь хранятся блоки, которые отвечают за модуль нашего компонента */

import { NgModule } from "@angular/core";
// ангуляр может работать не только в браузере - но и на мобильных платформах
// чтобы определить что мы хотим использовать ангуляр в браузере  -
import { BrowserModule } from "@angular/platform-browser";

import { HelloAngular } from "./app.component";

// соединим все модули с нашим компонентом
// NgModule также имеет аннотацию и класс
@NgModule({
    imports: [ BrowserModule ],
    declarations: [ HelloAngular ], // объявим наш компонент
    bootstrap: [ HelloAngular ], // загрузим наш компонент
})
export class HelloAngularAppModule {} // дадим название нашему модулю