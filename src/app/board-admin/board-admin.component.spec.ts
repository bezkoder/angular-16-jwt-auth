import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAdminComponent } from './board-admin.component';

import { UserService } from '../_services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BoardAdminComponent', () => {
  let component: BoardAdminComponent;
  let fixture: ComponentFixture<BoardAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
      declarations: [BoardAdminComponent]
    });
    fixture = TestBed.createComponent(BoardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
