package com.cutiepets.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cutiepets.pojos.User;

public interface UserRepository extends JpaRepository<User, Integer> {

    // Find user by email
    Optional<User> findByEmail(String email);

    // Check if email exists
    boolean existsByEmail(String email);

    // Login validation
    Optional<User> findByEmailAndPassword(String email, String password);
}
