import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBlogComponent } from './delete-blog.component';

describe('DeleteBlogComponent', () => {
  let component: DeleteBlogComponent;
  let fixture: ComponentFixture<DeleteBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
