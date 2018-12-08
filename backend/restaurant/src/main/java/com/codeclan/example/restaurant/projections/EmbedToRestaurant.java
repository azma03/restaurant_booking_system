package com.codeclan.example.restaurant.projections;

import com.codeclan.example.restaurant.models.Booth;
import com.codeclan.example.restaurant.models.Restaurant;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedToRestaurant", types = Restaurant.class)
public interface EmbedToRestaurant {
    Long getId();
    String getName();
    List<Booth> getBooths();
}
