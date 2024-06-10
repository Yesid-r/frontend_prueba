import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcreditsComponent } from './listcredits.component';

describe('ListcreditsComponent', () => {
  let component: ListcreditsComponent;
  let fixture: ComponentFixture<ListcreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcreditsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
