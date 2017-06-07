import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-algorithm-selection',
    templateUrl: './algorithm-selection.component.html',
    styleUrls: ['./algorithm-selection.component.css']
})
export class AlgorithmSelectionComponent implements OnInit {

    @Input() algorithm;

    word: string;
    checkLetters: string[];
    pickLetters: string[];

    private currentLetter: number; // текущая буква в проверяемом слове

    constructor() {
        this.currentLetter = 0; // установим в начало
    }

    ngOnInit() {
        this.word = this.algorithm.word.trainingWord.original;
        this.checkLetters = this.word.split('');
        this.pickLetters = this.getPickLetters(this.checkLetters.slice());
    }

    // обработка выбора буквы пользователем
    clickPickList(target: HTMLElement): void {
        if (target.classList.contains('selection__pick-letter')) {

            // если нажатая и текущая буква совпадают
            if (target.innerText == this.checkLetters[this.currentLetter]) {

                if (this.showRightAnswer()) {
                    // счетчик букв увеличим
                    this.currentLetter++;

                    if (this.currentLetter == this.checkLetters.length) {
                        //alert('The end !');
                        return;
                        // тут нужно будет отсылать "наверх" сообщение
                        // об окончании данного теста и рузультат: правильно / неправильно
                    }

                    // словосочетание может состоять из нескольких слов
                    // и между ними будут пробелы
                    if (!this.checkLetters[this.currentLetter].trim()) {
                        this.currentLetter++;
                    }
                }

            } else {
                // если НЕ совпадают
                this.showWrongAnswer(target);
            }
        }
    }

    // показывает правильный ответ
    private showRightAnswer(): boolean {
        // найдем текущую букву
        let letter: HTMLLIElement = document.body.querySelector('.letter-' + this.currentLetter) as HTMLLIElement;

        if (letter) {
            // покажем ее
            letter.classList.remove('selection-hidden');
            return true;
        }

        return false;
    }

    private showWrongAnswer(element: HTMLElement): void {
        element.classList.add('selection-wrong');

        setTimeout(((target: HTMLElement) => {
            return () => {
                target.classList.remove('selection-wrong');
            };
        })(element), 300);
    }

    // получает массив букв (в рандомном порядке),
    // по которым будет кликать пользователь
    private getPickLetters(charArray: string[]): string[] {

        let newArray: string[] = [];
        let min: number = 0;

        while (charArray.length > 0) {
            let max: number = charArray.length;
            let letter = charArray.splice(this.getRandomInt(min, max), 1)[0];

            // пробелы игнорируем
            if (letter.trim()) {
                newArray.push(letter);
            }
        }

        return newArray;
    }

    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

}
