/* Здесь запуск приложения */

// мы хотим использовать ангуляр в браузере и компилировать его динамически прямо в нём
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HelloAngularAppModule } from "./app.module";
import { RedditAppModule } from "./reddit/module";

platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);
platformBrowserDynamic().bootstrapModule(RedditAppModule);