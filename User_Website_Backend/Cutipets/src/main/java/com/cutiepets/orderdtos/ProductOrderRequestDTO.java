package com.cutiepets.orderdtos;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ProductOrderRequestDTO {
    private Long productId;
    private Integer quantity;
}
