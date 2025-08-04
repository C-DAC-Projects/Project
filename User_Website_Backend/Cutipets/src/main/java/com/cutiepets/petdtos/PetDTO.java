package com.cutiepets.petdtos;

import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class PetDTO {
    private Integer id;
    private String name;
    private Integer age;
    private String gender;
    private BigDecimal price;
    private String description;
    private Boolean available;
    private String breedName;
    private String petTypeName;
    private List<String> imageUrls;  // list of image URLs
}

