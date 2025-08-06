package com.cutiepets.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cutiepets.pojos.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {}