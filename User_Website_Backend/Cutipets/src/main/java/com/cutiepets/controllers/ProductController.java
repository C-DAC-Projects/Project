package com.cutiepets.controllers;

import com.cutiepets.productdtos.ProductDTO;
import com.cutiepets.services.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@AllArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public List<ProductDTO> getAllProducts() {
        return productService.getAllAvailableProducts();
    }

    @GetMapping("/{id}")
    public ProductDTO getProductById(@PathVariable Integer id) {
        return productService.getProductById(id);
    }

    @GetMapping("/pet-type/{petTypeId}")
    public List<ProductDTO> getProductsByPetType(@PathVariable Integer petTypeId) {
        return productService.getProductsByPetType(petTypeId);
    }

    @GetMapping("/category/{categoryId}")
    public List<ProductDTO> getProductsByCategory(@PathVariable Integer categoryId) {
        return productService.getProductsByCategory(categoryId);
    }

    @GetMapping("/category/{categoryId}/pet-type/{petTypeId}")
    public List<ProductDTO> getProductsByCategoryAndPetType(
            @PathVariable Integer categoryId,
            @PathVariable Integer petTypeId) {
        return productService.getProductsByCategoryAndPetType(categoryId, petTypeId);
    }

    @GetMapping("/filter")
    public List<ProductDTO> filterProducts(
            @RequestParam(required = false) Integer categoryId,
            @RequestParam(required = false) Integer petTypeId,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice) {
        return productService.filterProducts(petTypeId, categoryId, minPrice, maxPrice);
    }
}
