package com.cutiepets.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cutiepets.pojos.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findByUserId(Integer userId);
}
