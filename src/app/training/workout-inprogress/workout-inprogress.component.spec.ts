import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutInprogressComponent } from './workout-inprogress.component';

describe('WorkoutInprogressComponent', () => {
  let component: WorkoutInprogressComponent;
  let fixture: ComponentFixture<WorkoutInprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutInprogressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
