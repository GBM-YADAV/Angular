import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnDirectoryComponent } from './learn-directory.component';

describe('LearnDirectoryComponent', () => {
  let component: LearnDirectoryComponent;
  let fixture: ComponentFixture<LearnDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
