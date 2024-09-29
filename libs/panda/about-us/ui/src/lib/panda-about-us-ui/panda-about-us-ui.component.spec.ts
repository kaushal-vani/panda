import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaAboutUsUiComponent } from './panda-about-us-ui.component';

describe('PandaAboutUsUiComponent', () => {
  let component: PandaAboutUsUiComponent;
  let fixture: ComponentFixture<PandaAboutUsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaAboutUsUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaAboutUsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
