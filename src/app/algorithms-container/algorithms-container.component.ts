import {Component, OnInit} from '@angular/core';
import {init} from "protractor/built/launcher";

// ТИП: слово и его перевод
type WordTranslate = {
    original: string,
    translate: string
}

// ТИП: текущее слово для проверки и массив вариантов его перевода
type CheckTranslateObject = {
    trainingWord: WordTranslate,
    translates: WordTranslate[]
}

type Algorithm = {
    algorithm: string,
    word: CheckTranslateObject
}

@Component({
    selector: 'app-algorithms-container',
    templateUrl: './algorithms-container.component.html',
    styleUrls: ['./algorithms-container.component.css']
})
export class AlgorithmsContainerComponent implements OnInit {

    // константы
    readonly ALGORITHM_TRANSLATE = 'TRANSLATE';
    readonly ALGORITHM_SELECTION = 'SELECTION';

    // переменные класса
    wordsArray: CheckTranslateObject[]; // массив слов для тестов (приходит с бэкенда)
    algorithmNames: string[] = []; // массив состояний алгоритмов, который true - тот текущий
    algorithmArray: Algorithm[] = []; // массив алгоритмов
    currentTestAlgorithm: Algorithm; // текущий алгоритм на тесте


    // конструктор
    constructor() {

        // инициализируем набор названий алгоритмов
        this.initAlgorithmNames();

        // получим массив слов для тестов
        // если есть слова для тестирования
        if (this.initCheckArray()) {

            // создадим массив алгоритмов-тестов
            this.generateAlgorithmArray();

            // стартуем тест
            this.runTest();
        }
    }

    // функция запускает очередной тест
    private runTest(): void {
        // установим текущим "верхний" в стеке алгоритм и удалим его из стека
        this.currentTestAlgorithm = this.algorithmArray.shift();
    }

    // создает массив алгоритмов для тестов
    generateAlgorithmArray(): void {
        for (let algorithm of this.algorithmNames) {
            for (let word of this.wordsArray) {
                this.algorithmArray.push({
                    algorithm: algorithm,
                    word: word
                });
            }
        }
    }

    // функция инициализирует массив названий алгоритмов
    initAlgorithmNames(): void {
        this.algorithmNames.push(this.ALGORITHM_SELECTION);
        this.algorithmNames.push(this.ALGORITHM_TRANSLATE);
    }

    // временная имплементация, потом заменить на XHR-вызов
    private initCheckArray(): boolean {
        this.wordsArray = [
            {
                trainingWord: {
                    original: 'you welcome',
                    translate: 'пожалуйста'
                },
                translates: [
                    {
                        original: 'you welcome',
                        translate: 'пожалуйста'
                    },
                    {
                        original: 'hello',
                        translate: 'привет'
                    },
                    {
                        original: 'bye',
                        translate: 'пока'
                    }
                ]
            },
            {
                trainingWord: {
                    original: 'cat',
                    translate: 'кошка'
                },
                translates: [
                    {
                        original: 'dog',
                        translate: 'собака'
                    },
                    {
                        original: 'cat',
                        translate: 'кошка'
                    },
                    {
                        original: 'mouse',
                        translate: 'мышь'
                    }
                ]
            },
            {
                trainingWord: {
                    original: 'bird',
                    translate: 'птица'
                },
                translates: [
                    {
                        original: 'dog',
                        translate: 'собака'
                    },
                    {
                        original: 'chicken',
                        translate: 'цыпленок'
                    },
                    {
                        original: 'bird',
                        translate: 'птица'
                    }
                ]
            },
            {
                trainingWord: {
                    original: 'mouse',
                    translate: 'мышь'
                },
                translates: [
                    {
                        original: 'rat',
                        translate: 'крыса'
                    },
                    {
                        original: 'mouse',
                        translate: 'мышь'
                    },
                    {
                        original: 'rabbit',
                        translate: 'кролик'
                    }
                ]
            }
        ];

        return true;
    }

    ngOnInit() {
    }

}





















