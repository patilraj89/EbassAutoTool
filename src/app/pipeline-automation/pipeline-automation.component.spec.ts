import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineAutomationComponent } from './pipeline-automation.component';

describe('PipelineAutomationComponent', () => {
  let component: PipelineAutomationComponent;
  let fixture: ComponentFixture<PipelineAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
