package com.cutiepets.orderdtos;

import java.util.List;

import lombok.Data;

@Data
public class OrderRequestDTO {
    private Integer userId;
    private List<OrderItemDTO> items;
}
