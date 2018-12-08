package com.codeclan.example.restaurant.projections;

import com.codeclan.example.restaurant.models.Booking;
import com.codeclan.example.restaurant.models.Booth;
import com.codeclan.example.restaurant.models.Restaurant;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedToBooth", types = Booth.class)
public interface EmbedToBooth {
    Long getId();
    Restaurant getRestaurant();
    int getCapacity();
    boolean isAvailable();
    List<Booking> getBookings();
}
