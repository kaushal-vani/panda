import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaFeedBackUiComponent } from './panda-feed-back-ui.component';

describe('PandaFeedBackUiComponent', () => {
  let component: PandaFeedBackUiComponent;
  let fixture: ComponentFixture<PandaFeedBackUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaFeedBackUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaFeedBackUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
