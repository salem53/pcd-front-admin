import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredMissionsComponent } from './hired-missions.component';

describe('HiredMissionsComponent', () => {
  let component: HiredMissionsComponent;
  let fixture: ComponentFixture<HiredMissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiredMissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
