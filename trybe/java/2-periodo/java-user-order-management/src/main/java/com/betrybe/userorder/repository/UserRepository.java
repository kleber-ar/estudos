package com.betrybe.userorder.repository;

import com.betrybe.userorder.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
