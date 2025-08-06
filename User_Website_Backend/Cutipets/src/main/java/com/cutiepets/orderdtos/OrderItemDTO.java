package com.cutiepets.orderdtos;

import lombok.Data;

@Data
public class OrderItemDTO {
    private Integer productId;
    private Integer quantity;
}
