import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookService } from './book.service';
import { Book } from '../book'; 

describe('BookService', () => {
  let bookService: BookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService],
    });
    bookService = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getBookList', () => {
    it('should return an array of books', () => {
      const expectedBooks: Book[] = [
        { id: 1, bookTitle: 'Test Book 1', authorName: 'Test Author 1', publisher: 'Test publisher 1',bookType:'Test publisher 1',price:255,stock:255 },
        { id: 2, bookTitle: 'Test Book 2', authorName: 'Test Author 2', publisher:'Test publisher 2', bookType : 'Test publisher 2', price:225,stock:245},
      ];

      bookService.getBookList().subscribe((books) => {
        expect(books).toEqual(expectedBooks);
      });

      const req = httpMock.expectOne(bookService.baseURL);
      expect(req.request.method).toEqual('GET');
      req.flush(expectedBooks);
    });

    it('should make a GET request with the correct URL', () => {
      bookService.getBookList().subscribe(() => {});

      const req = httpMock.expectOne(bookService.baseURL);
      expect(req.request.method).toEqual('GET');
    });
  });
});
