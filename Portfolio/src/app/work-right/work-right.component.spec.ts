import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRightComponent } from './work-right.component';

describe('WorkRightComponent', () => {
  let component: WorkRightComponent;
  let fixture: ComponentFixture<WorkRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
