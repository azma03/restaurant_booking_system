package com.codeclan.example.restaurant.projections;

import com.codeclan.example.restaurant.models.Booking;
import com.codeclan.example.restaurant.models.Item;
import com.codeclan.example.restaurant.models.Receipt;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedToReceipt", types = Receipt.class)
public interface EmbedToReceipt {
    Long getId();
    List<Item> getItems();
    Booking getBooking();
    double getTotal();
}
