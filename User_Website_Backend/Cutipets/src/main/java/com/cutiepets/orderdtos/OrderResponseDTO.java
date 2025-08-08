package com.cutiepets.orderdtos;

import com.cutiepets.pojos.Order.Status;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderResponseDTO {
    private Long id;
    private Double totalAmount;
    private Status status;
    private LocalDateTime timestamp;
    private Long userId;
    private List<PetOrderResponseDTO> petOrders;
    private List<ProductOrderResponseDTO> productOrders;
}
