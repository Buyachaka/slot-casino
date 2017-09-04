import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotCasinoComponent } from './slot-casino.component';

describe('SlotCasinoComponent', () => {
  let component: SlotCasinoComponent;
  let fixture: ComponentFixture<SlotCasinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotCasinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotCasinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
