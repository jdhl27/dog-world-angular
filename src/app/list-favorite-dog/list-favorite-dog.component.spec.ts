import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavoriteDogComponent } from './list-favorite-dog.component';

describe('ListFavoriteDogComponent', () => {
  let component: ListFavoriteDogComponent;
  let fixture: ComponentFixture<ListFavoriteDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFavoriteDogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFavoriteDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
