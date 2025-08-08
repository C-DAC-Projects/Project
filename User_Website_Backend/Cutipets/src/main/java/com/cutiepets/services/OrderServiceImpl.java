package com.cutiepets.services;

import com.cutiepets.orderdtos.*;
import com.cutiepets.pojos.*;
import com.cutiepets.pojos.Order.Status;
import com.cutiepets.repositories.*;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final PetRepository petRepository;
    private final ProductRepository productRepository;

    @Override
    public List<OrderResponseDTO> getAllOrders() {
        return orderRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public OrderResponseDTO getOrderById(Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        return convertToDTO(order);
    }

    @Override
    public List<OrderResponseDTO> getOrdersByUser(Long userId) {
        return orderRepository.findByCustomerId(userId)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public OrderResponseDTO createOrder(OrderRequestDTO request) {
        User user = userRepository.findById(request.getUserId().intValue())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Order order = Order.builder()
                .timestamp(LocalDateTime.now())
                .totalAmount(request.getTotalAmount())
                .status(Status.PLACED)
                .customer(user)
                .build();

        List<PetOrder> petOrders = request.getPetOrders().stream()
                .map(po -> {
                    Pet pet = petRepository.findById(po.getPetId().intValue())
                            .orElseThrow(() -> new RuntimeException("Pet not found"));
                    return PetOrder.builder()
                            .order(order)
                            .pet(pet)
                            .deliveryMethod(po.getDeliveryMethod())
                            .build();
                }).collect(Collectors.toList());

        List<ProductOrder> productOrders = request.getProductOrders().stream()
                .map(po -> {
                    Product product = productRepository.findById(po.getProductId().intValue())
                            .orElseThrow(() -> new RuntimeException("Product not found"));
                    return ProductOrder.builder()
                            .order(order)
                            .product(product)
                            .quantity(po.getQuantity())
                            .build();
                }).collect(Collectors.toList());

        order.getPetOrders().addAll(petOrders);
        order.getProductOrders().addAll(productOrders);

        Order saved = orderRepository.save(order);
        return convertToDTO(saved);
    }

    @Override
    public OrderResponseDTO updateOrder(Long orderId, OrderRequestDTO request) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        order.setTotalAmount(request.getTotalAmount());
        if (request.getStatus() != null) {
            order.setStatus(Status.valueOf(request.getStatus()));
        }

        if (request.getUserId() != null) {
            User user = userRepository.findById(request.getUserId().intValue())
                    .orElseThrow(() -> new RuntimeException("User not found"));
            order.setCustomer(user);
        }

        return convertToDTO(orderRepository.save(order));
    }

    @Override
    public void deleteOrder(Long orderId) {
        if (!orderRepository.existsById(orderId)) {
            throw new RuntimeException("Order not found");
        }
        orderRepository.deleteById(orderId);
    }

    private OrderResponseDTO convertToDTO(Order order) {
        return OrderResponseDTO.builder()
                .id(order.getId())
                .totalAmount(order.getTotalAmount())
                .status(order.getStatus())
                .timestamp(order.getTimestamp())
                .userId(order.getCustomer().getId().longValue())
                .petOrders(order.getPetOrders().stream()
                        .map(po -> PetOrderResponseDTO.builder()
                                .id(po.getId())
                                .petId(po.getPet().getId().longValue())
                                .petName(po.getPet().getName())
                                .deliveryMethod(po.getDeliveryMethod())
                                .price(po.getPet().getPrice()) // Assuming Pet has price
                                .build())
                        .collect(Collectors.toList()))
                .productOrders(order.getProductOrders().stream()
                        .map(po -> ProductOrderResponseDTO.builder()
                                .id(po.getId())
                                .productId(po.getProduct().getId().longValue())
                                .productName(po.getProduct().getName())
                                .quantity(po.getQuantity())
                                .price(po.getProduct().getPrice()) // Assuming Product has price
                                .build())
                        .collect(Collectors.toList()))
                .build();
    }
}
