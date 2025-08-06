package com.cutiepets.productdtos;

import lombok.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

    private Integer id;
    private String name;
    private Double price;
    private Integer stockQuantity;
    private String description;
    private Boolean available;

    private Integer categoryId;
    private String categoryName;

    private Integer petTypeId;
    private String petTypeName;

    private List<String> imageUrls; // ✅ Only image URLs, no image DTO
}
