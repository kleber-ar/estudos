package com.app.alexandria.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.app.alexandria.entity.Author;
import com.app.alexandria.entity.Book;
import com.app.alexandria.entity.BookDetail;
import com.app.alexandria.entity.Publisher;
import com.app.alexandria.repository.BookDetailRepository;
import com.app.alexandria.repository.BookRepository;
import com.app.alexandria.service.exception.AuthorNotFoundException;
import com.app.alexandria.service.exception.BookDetailNotFoundException;
import com.app.alexandria.service.exception.BookNotFoundException;
import com.app.alexandria.service.exception.PublisherNotFoundException;

@Service
public class BookService {

  private final BookRepository bookRepository;
  private final BookDetailRepository bookDetailRepository;
  private final PublisherService publisherService;
  private final AuthorService authorService;

  @Autowired
  public BookService(BookRepository bookRepository, BookDetailRepository bookDetailRepository,
      PublisherService publisherService, AuthorService authorService) {
    this.bookRepository = bookRepository;
    this.bookDetailRepository = bookDetailRepository;
    this.publisherService = publisherService;
    this.authorService = authorService;
  }

  public Book findById(Long id) throws BookNotFoundException {
    return bookRepository.findById(id)
        .orElseThrow(BookNotFoundException::new);
  }

  public List<Book> findAll() {
    return bookRepository.findAll();
  }

  public Book create(Book book) {
    return bookRepository.save(book);
  }

  public Book update(Long id, Book book) throws BookNotFoundException {
    Book bookFromDb = findById(id);

    bookFromDb.setTitle(book.getTitle());
    bookFromDb.setGenre(book.getGenre());

    return bookRepository.save(bookFromDb);
  }

  public Book deleteById(Long id) throws BookNotFoundException {
    // Pegamos a entidade antes de apagar, para poder retorná-la
    Book book = findById(id);

    bookRepository.deleteById(id);

    return book;
  }

  public BookDetail createBookDetail(Long bookId, BookDetail bookDetail)
      throws BookNotFoundException {
    Book book = findById(bookId);

    bookDetail.setBook(book);
    return bookDetailRepository.save(bookDetail);
  }

  public BookDetail getBookDetail(Long bookId)
      throws BookNotFoundException, BookDetailNotFoundException {
    Book book = findById(bookId);

    BookDetail bookDetailFromDb = book.getDetails();

    if (bookDetailFromDb == null) {
      throw new BookDetailNotFoundException();
    }

    return bookDetailFromDb;
  }

  public BookDetail updateBookDetail(Long bookId, BookDetail bookDetail)
      throws BookNotFoundException, BookDetailNotFoundException {
    BookDetail bookDetailFromDb = getBookDetail(bookId);

    bookDetailFromDb.setSummary(bookDetail.getSummary());
    bookDetailFromDb.setPageCount(bookDetail.getPageCount());
    bookDetailFromDb.setYear(bookDetail.getYear());
    bookDetailFromDb.setIsbn(bookDetail.getIsbn());

    return bookDetailRepository.save(bookDetailFromDb);
  }

  public BookDetail removeBookDetail(Long bookId)
      throws BookNotFoundException, BookDetailNotFoundException {
    Book book = findById(bookId);
    BookDetail bookDetail = book.getDetails();

    if (bookDetail == null) {
      throw new BookDetailNotFoundException();
    }

    book.setDetails(null);
    bookDetail.setBook(null);

    bookDetailRepository.delete(bookDetail);

    return bookDetail;
  }

  public Book setBookPublisher(Long bookId, Long publisherId)
      throws BookNotFoundException, PublisherNotFoundException {
    Book book = findById(bookId);
    Publisher publisher = publisherService.findById(publisherId);

    book.setPublisher(publisher);

    return bookRepository.save(book);
  }

  public Book removeBookPublisher(Long bookId) throws BookNotFoundException {
    Book book = findById(bookId);

    book.setPublisher(null);

    return bookRepository.save(book);
  }

  public Book addBookAuthor(Long bookId, Long authorId)
      throws BookNotFoundException, AuthorNotFoundException {
    Book book = findById(bookId);
    Author author = authorService.findById(authorId);

    book.getAuthors().add(author);

    return bookRepository.save(book);
  }

  public Book removeBookAuthor(Long bookId, Long authorId)
      throws BookNotFoundException, AuthorNotFoundException {
    Book book = findById(bookId);
    Author author = authorService.findById(authorId);

    book.getAuthors().remove(author);

    return bookRepository.save(book);
  }

  public List<Book> findAll(int pageNumber, int pageSize) {
    Pageable pageable = PageRequest.of(pageNumber, pageSize);
    Page<Book> page = bookRepository.findAll(pageable);

    return page.toList();
  }
}
