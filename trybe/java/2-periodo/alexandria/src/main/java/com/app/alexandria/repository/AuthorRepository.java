package com.app.alexandria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.alexandria.entity.Author;

/**
 * AuthorRepository
 */
@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {

}
