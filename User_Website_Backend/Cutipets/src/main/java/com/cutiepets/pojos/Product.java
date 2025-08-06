package com.cutiepets.pojos;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private Double price;
    private Integer stockQuantity;

    @Column(columnDefinition = "TEXT")
    private String description;

    private Boolean available;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private ProductCategory category;

    @ManyToOne
    @JoinColumn(name = "pet_type_id")
    private PetType petType;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<ProductImage> images;
}
