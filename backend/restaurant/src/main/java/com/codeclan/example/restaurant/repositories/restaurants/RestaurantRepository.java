package com.codeclan.example.restaurant.repositories.restaurants;

import com.codeclan.example.restaurant.models.Restaurant;
import com.codeclan.example.restaurant.projections.EmbedToRestaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedToRestaurant.class)
public interface RestaurantRepository extends JpaRepository<Restaurant, Long>, RestaurantRepositoryCustom {
}
