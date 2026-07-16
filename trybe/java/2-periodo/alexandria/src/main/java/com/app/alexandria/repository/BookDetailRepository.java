package com.app.alexandria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.alexandria.entity.BookDetail;

@Repository
public interface BookDetailRepository extends JpaRepository<BookDetail, Long> {

}
