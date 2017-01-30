import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RedditAppComponent } from "./component";

// соединим все модули с нашим компонентом
// NgModule также имеет аннотацию и класс
@NgModule({
    imports: [ BrowserModule ],
    declarations: [ RedditAppComponent ], // объявим наш компонент
    bootstrap: [ RedditAppComponent ], // загрузим наш компонент
})
export class RedditAppModule {} // дадим название нашему модулю