import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBackPageComponent } from './feed-back-page.component';

describe('FeedBackPageComponent', () => {
  let component: FeedBackPageComponent;
  let fixture: ComponentFixture<FeedBackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedBackPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedBackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
