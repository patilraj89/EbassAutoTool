import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineCreationStepsComponent } from './pipeline-creation-steps.component';

describe('PipelineCreationStepsComponent', () => {
  let component: PipelineCreationStepsComponent;
  let fixture: ComponentFixture<PipelineCreationStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineCreationStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineCreationStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
