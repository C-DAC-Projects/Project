package com.cutiepets.services;

import java.util.List;
import com.cutiepets.productdtos.ProductDTO;

public interface ProductService {

    List<ProductDTO> getAllAvailableProducts();

    List<ProductDTO> getProductsByPetType(Integer petTypeId);

    List<ProductDTO> getProductsByCategory(Integer categoryId);

    List<ProductDTO> getProductsByCategoryAndPetType(Integer categoryId, Integer petTypeId);

    List<ProductDTO> filterProducts(Integer petTypeId, Integer categoryId,
                                    Double minPrice, Double maxPrice);

    ProductDTO getProductById(Integer id);
}
