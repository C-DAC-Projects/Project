package com.cutiepets.orderdtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductOrderResponseDTO {
    private Long id;               // ID of ProductOrder
    private Long productId;
    private String productName;
    private Integer quantity;
    private Double price;
}
