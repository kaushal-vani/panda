import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaHomeUiComponent } from './panda-home-ui.component';

describe('PandaHomeUiComponent', () => {
  let component: PandaHomeUiComponent;
  let fixture: ComponentFixture<PandaHomeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaHomeUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaHomeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
