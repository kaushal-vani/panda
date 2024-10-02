import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaProfileUiComponent } from './panda-profile-ui.component';

describe('PandaProfileUiComponent', () => {
  let component: PandaProfileUiComponent;
  let fixture: ComponentFixture<PandaProfileUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaProfileUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaProfileUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
