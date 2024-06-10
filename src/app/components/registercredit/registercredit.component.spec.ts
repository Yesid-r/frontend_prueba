import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercreditComponent } from './registercredit.component';

describe('RegistercreditComponent', () => {
  let component: RegistercreditComponent;
  let fixture: ComponentFixture<RegistercreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistercreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistercreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
