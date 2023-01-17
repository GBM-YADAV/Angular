import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStuComponent } from './single-stu.component';

describe('SingleStuComponent', () => {
  let component: SingleStuComponent;
  let fixture: ComponentFixture<SingleStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleStuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
