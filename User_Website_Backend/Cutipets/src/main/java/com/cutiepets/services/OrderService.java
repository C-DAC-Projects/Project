package com.cutiepets.services;

import java.util.List;

import com.cutiepets.orderdtos.OrderRequestDTO;
import com.cutiepets.orderdtos.OrderResponseDTO;

public interface OrderService {
    OrderResponseDTO placeOrder(OrderRequestDTO orderRequest);
    OrderResponseDTO getOrderById(Integer id);
    List<OrderResponseDTO> getAllOrders();
    List<OrderResponseDTO> getOrdersByUser(Integer userId);
    void cancelOrder(Integer id);
}
