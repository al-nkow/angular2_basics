import { Component } from '@angular/core';

// click dbclick keypress - без on (не on-click)
@Component({
    selector: 'reddit',
    styleUrls: ['./app/reddit/reddit.css'],
    template: `
        <form action="" class="ui large form segment">
            <h3 class="ui header">Добавить ссылку</h3>
            <div class="field">
                <label for="title">Заголовок</label>
                <input type="text" name="title" #newtitle>
            </div>
            <div class="field">
                <label for="link">Ссылка</label>
                <input type="text" name="link" #newlink>
            </div>
            <button class="ui positive right floated button" (click)="addArticle($event, newtitle, newlink)">
                Отправить
            </button>
        </form>
    `
})
export class RedditAppComponent {
    addArticle(event: any, newtitle: HTMLInputElement, newlink: HTMLInputElement) {
        console.log(event, '--------', newtitle.value, newlink.value);
        return false;
    }
}