import { ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { Observable, Observer } from 'rxjs';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/services/book.service';
import { BookListComponent } from './book-list.component';

let mockData = [
  {
    id:101,
    bookTitle:'book1',
    authorName:'author1',
    publisher:'publisher1',
    bookType:'type1',
    price:122,
    stock:213
  }
];

class MockBookService{
  getBooks(){
    return new Observable(
      (observer: Observer<Array<Book>>)=>{
      observer.next(mockData);
    });
  }
}


describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListComponent ],
      imports:[],
      providers:[
        { provide:BookService, useClass:MockBookService }
      ]
    })
    .compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make a call to BookService.getBooks()',()=>{
    spyOn(component.service,'getBookList').and.callThrough();
    component.getBooks();
    expect(component.service.getBookList).toHaveBeenCalled();
  });

  it('should set the books property after fetching data', waitForAsync(()=>{
    component.getBooks();
    fixture.whenStable().then(()=>{
      expect(component.books).toEqual(mockData);
    });
  }));
});
