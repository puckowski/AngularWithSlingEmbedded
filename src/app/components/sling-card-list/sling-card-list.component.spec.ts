import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlingCardListComponent } from './sling-card-list.component';

describe('SlingCardListComponent', () => {
  let component: SlingCardListComponent;
  let fixture: ComponentFixture<SlingCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlingCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlingCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
