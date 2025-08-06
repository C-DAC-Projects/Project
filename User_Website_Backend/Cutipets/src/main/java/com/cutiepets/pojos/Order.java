package com.cutiepets.pojos;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime createdAt;

    private Double totalAmount;

    @Enumerated(EnumType.STRING)
    private Status status;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private User customer;

    @OneToOne(mappedBy = "order", cascade = CascadeType.ALL)
    private PetOrder petOrder;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<ProductOrder> productOrders;

    public enum Status {
        PENDING, COMPLETED, CANCELLED
    }

	public Object getOrderDate() {
		// TODO Auto-generated method stub
		return null;
	}
}
