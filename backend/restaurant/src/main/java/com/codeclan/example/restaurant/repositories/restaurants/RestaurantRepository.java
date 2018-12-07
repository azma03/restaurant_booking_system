package com.codeclan.example.restaurant.repositories.restaurants;

import com.codeclan.example.restaurant.models.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
}
