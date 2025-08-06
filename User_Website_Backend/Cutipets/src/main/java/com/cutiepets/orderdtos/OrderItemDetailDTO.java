package com.cutiepets.orderdtos;

import lombok.Data;

@Data
public class OrderItemDetailDTO {
    private String productName;
    private Integer quantity;
    private Double price;
}
