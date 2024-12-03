import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilPage } from './perfil.page';
import { IonicStorageModule } from '@ionic/storage-angular';
import { provideHttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilPage],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot()],
      providers: [provideHttpClient()]
    }).compileComponents();
    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});