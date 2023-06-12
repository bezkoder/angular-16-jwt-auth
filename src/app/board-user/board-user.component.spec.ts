import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUserComponent } from './board-user.component';

import { UserService } from '../_services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BoardUserComponent', () => {
  let component: BoardUserComponent;
  let fixture: ComponentFixture<BoardUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
      declarations: [BoardUserComponent]
    });
    fixture = TestBed.createComponent(BoardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
