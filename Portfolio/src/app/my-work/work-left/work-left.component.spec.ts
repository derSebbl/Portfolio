import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLeftComponent } from './work-left.component';

describe('WorkLeftComponent', () => {
  let component: WorkLeftComponent;
  let fixture: ComponentFixture<WorkLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
