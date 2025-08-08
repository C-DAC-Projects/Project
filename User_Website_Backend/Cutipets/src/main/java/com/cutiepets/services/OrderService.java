package com.cutiepets.services;

import com.cutiepets.orderdtos.OrderRequestDTO;
import com.cutiepets.orderdtos.OrderResponseDTO;

import java.util.List;

public interface OrderService {
    List<OrderResponseDTO> getAllOrders();
    OrderResponseDTO getOrderById(Long id);
    List<OrderResponseDTO> getOrdersByUser(Long userId);
    OrderResponseDTO updateOrder(Long orderId, OrderRequestDTO dto);
    void deleteOrder(Long orderId);
    OrderResponseDTO createOrder(OrderRequestDTO orderRequestDTO);
}
