package com.app.alexandria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.alexandria.entity.Publisher;

/**
 * PublisherRepository
 */
@Repository
public interface PublisherRepository extends JpaRepository<Publisher, Long> {

}
