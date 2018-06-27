import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BunComponent } from './bun.component';

describe('BunComponent', () => {
  let component: BunComponent;
  let fixture: ComponentFixture<BunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
