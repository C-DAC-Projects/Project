package com.cutiepets.controllers;

import com.cutiepets.orderdtos.OrderResponseDTO;
import com.cutiepets.orderdtos.OrderRequestDTO;
import com.cutiepets.services.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    // ✅ Get order by ID
    @GetMapping("/{id}")
    public OrderResponseDTO getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id);
    }

    // ✅ Get all orders
    @GetMapping
    public List<OrderResponseDTO> getAllOrders() {
        return orderService.getAllOrders();
    }

    // ✅ Get all orders placed by a specific user
    @GetMapping("/user/{userId}")
    public List<OrderResponseDTO> getOrdersByUser(@PathVariable Long userId) {
        return orderService.getOrdersByUser(userId);
    }

    // ✅ Update an order
    @PutMapping("/{orderId}")
    public OrderResponseDTO updateOrder(@PathVariable Long orderId, @RequestBody OrderRequestDTO orderRequestDTO) {
        return orderService.updateOrder(orderId, orderRequestDTO);
    }

    // ✅ Delete an order
    @DeleteMapping("/{orderId}")
    public void deleteOrder(@PathVariable Long orderId) {
        orderService.deleteOrder(orderId);
    }

    // ✅ Create a new order
    @PostMapping
    public OrderResponseDTO createOrder(@RequestBody OrderRequestDTO orderRequestDTO) {
        return orderService.createOrder(orderRequestDTO);
    }
}
