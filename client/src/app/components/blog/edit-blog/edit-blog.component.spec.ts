import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogComponent } from './edit-blog.component';

describe('EditBlogComponent', () => {
  let component: EditBlogComponent;
  let fixture: ComponentFixture<EditBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
