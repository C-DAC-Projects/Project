package com.cutiepets.orderdtos;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PetOrderRequestDTO {
    private Long petId;
    private String deliveryMethod;
}
