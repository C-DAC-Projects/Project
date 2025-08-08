package com.cutiepets.repositories;

import com.cutiepets.pojos.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findAll();
    Optional<Order> findById(Long id);
    List<Order> findByCustomerId(Long userId);
}

