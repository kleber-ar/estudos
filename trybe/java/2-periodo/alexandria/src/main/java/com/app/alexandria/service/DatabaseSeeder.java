package com.app.alexandria.service;

import com.app.alexandria.entity.Book;
import com.app.alexandria.repository.BookRepository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseSeeder implements CommandLineRunner {

  private final BookRepository bookRepository;

  public DatabaseSeeder(BookRepository bookRepository) {
    this.bookRepository = bookRepository;
  }

  @Override
  public void run(String... args) throws Exception {
    seedBooks();
  }

  private void seedBooks() {
    List<Book> books = new ArrayList<>();

    books.add(new Book("The Fall of the Roman Republic", "History"));
    books.add(new Book("The Civil War", "History"));

    bookRepository.saveAll(books);
  }
}
