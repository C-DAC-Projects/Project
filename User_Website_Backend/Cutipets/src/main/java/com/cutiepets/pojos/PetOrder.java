package com.cutiepets.pojos;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "pet_orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PetOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "pet_id")
    private Pet pet;

    private String deliveryMethod; // e.g., "pickup", "courier"
}
