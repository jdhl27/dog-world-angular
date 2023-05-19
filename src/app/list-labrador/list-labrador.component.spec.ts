import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLabradorComponent } from './list-labrador.component';

describe('ListLabradorComponent', () => {
  let component: ListLabradorComponent;
  let fixture: ComponentFixture<ListLabradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLabradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLabradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
