package com.cutiepets.orderdtos;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class OrderRequestDTO {
    private Long userId;
    private Double totalAmount;
    private List<PetOrderRequestDTO> petOrders;
    private List<ProductOrderRequestDTO> productOrders;
    private String status; //added later
    private LocalDateTime timestamp; //added later
}
