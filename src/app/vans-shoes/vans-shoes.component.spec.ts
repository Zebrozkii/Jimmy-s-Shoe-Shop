import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VansShoesComponent } from './vans-shoes.component';

describe('VansShoesComponent', () => {
  let component: VansShoesComponent;
  let fixture: ComponentFixture<VansShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VansShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VansShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
