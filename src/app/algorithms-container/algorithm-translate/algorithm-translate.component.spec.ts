import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmTranslateComponent } from './algorithm-translate.component';

describe('AlgorithmTranslateComponent', () => {
  let component: AlgorithmTranslateComponent;
  let fixture: ComponentFixture<AlgorithmTranslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmTranslateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
