package com.cutiepets.orderdtos;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Data;

@Data
public class OrderResponseDTO {
    private Integer orderId;
    private Double totalAmount;
    private String status;
    private LocalDateTime orderDate;
    private List<OrderItemDetailDTO> items;
}
