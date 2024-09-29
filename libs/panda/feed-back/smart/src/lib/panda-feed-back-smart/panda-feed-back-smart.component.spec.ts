import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaFeedBackSmartComponent } from './panda-feed-back-smart.component';

describe('PandaFeedBackSmartComponent', () => {
  let component: PandaFeedBackSmartComponent;
  let fixture: ComponentFixture<PandaFeedBackSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaFeedBackSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaFeedBackSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
