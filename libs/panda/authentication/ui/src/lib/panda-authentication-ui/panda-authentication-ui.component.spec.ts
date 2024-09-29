import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaAuthenticationUiComponent } from './panda-authentication-ui.component';

describe('PandaAuthenticationUiComponent', () => {
  let component: PandaAuthenticationUiComponent;
  let fixture: ComponentFixture<PandaAuthenticationUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaAuthenticationUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaAuthenticationUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
