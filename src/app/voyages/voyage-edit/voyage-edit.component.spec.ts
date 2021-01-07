import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageEditComponent } from './voyage-edit.component';

describe('VoyageEditComponent', () => {
  let component: VoyageEditComponent;
  let fixture: ComponentFixture<VoyageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
