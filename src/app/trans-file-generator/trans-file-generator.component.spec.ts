import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransFileGeneratorComponent } from './trans-file-generator.component';

describe('TransFileGeneratorComponent', () => {
  let component: TransFileGeneratorComponent;
  let fixture: ComponentFixture<TransFileGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransFileGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransFileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
