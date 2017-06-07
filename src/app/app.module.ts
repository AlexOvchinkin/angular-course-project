import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlgorithmsContainerComponent } from './algorithms-container/algorithms-container.component';
import { AlgorithmTranslateComponent } from './algorithms-container/algorithm-translate/algorithm-translate.component';
import { AlgorithmSelectionComponent } from './algorithms-container/algorithm-selection/algorithm-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgorithmsContainerComponent,
    AlgorithmTranslateComponent,
    AlgorithmSelectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
