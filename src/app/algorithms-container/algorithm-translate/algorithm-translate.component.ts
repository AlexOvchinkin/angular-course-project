import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-algorithm-translate',
    templateUrl: './algorithm-translate.component.html',
    styleUrls: ['./algorithm-translate.component.css']
})
export class AlgorithmTranslateComponent implements OnInit {

    @Input() algorithm;

    translateWord: string; // перевод тестируемого слова

    constructor() { }

    // обработка клика по кнопке с переводом слова
    checkWordClick(event: MouseEvent): void {
        // пока так, как разберемся с передачей результата "наверх"
        // нужно будет информировать контейнер о результате (правильно/неправильно)
        let target: HTMLElement = event.target as HTMLElement;
        if (target.innerText !== this.translateWord) {
            target.classList.add('translate-wrong');

            setTimeout(((target: HTMLElement) => {
                return () => {
                    target.classList.remove('translate-wrong');
                };
            })(target), 300);
        }
    }

    ngOnInit() {
        this.translateWord = this.algorithm.word.trainingWord.translate;
    }

}
