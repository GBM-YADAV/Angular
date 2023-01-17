import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuListComComponent } from './stu-list-com.component';

describe('StuListComComponent', () => {
  let component: StuListComComponent;
  let fixture: ComponentFixture<StuListComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuListComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuListComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
