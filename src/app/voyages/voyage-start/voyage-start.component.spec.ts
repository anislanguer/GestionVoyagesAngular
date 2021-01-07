import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageStartComponent } from './voyage-start.component';

describe('VoyageStartComponent', () => {
  let component: VoyageStartComponent;
  let fixture: ComponentFixture<VoyageStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
