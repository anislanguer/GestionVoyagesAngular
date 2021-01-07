import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageNewComponent } from './voyage-new.component';

describe('VoyageNewComponent', () => {
  let component: VoyageNewComponent;
  let fixture: ComponentFixture<VoyageNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
