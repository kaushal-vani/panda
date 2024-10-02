import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBackOverlayComponent } from './feed-back-overlay.component';

describe('FeedBackOverlayComponent', () => {
  let component: FeedBackOverlayComponent;
  let fixture: ComponentFixture<FeedBackOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedBackOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedBackOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
