package com.cutiepets.orderdtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PetOrderResponseDTO {
    private Long id;               // ID of PetOrder
    private Long petId;
    private String petName;
    private Double price;
    private String deliveryMethod;
}
