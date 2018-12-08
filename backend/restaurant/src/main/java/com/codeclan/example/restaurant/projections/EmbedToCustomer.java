package com.codeclan.example.restaurant.projections;

import com.codeclan.example.restaurant.models.Booking;
import com.codeclan.example.restaurant.models.Customer;
import com.codeclan.example.restaurant.models.Discount;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedToCustomer", types = Customer.class)
public interface EmbedToCustomer {
    Long getId();
    String getName();
    String getEmail();
    String getPhone();
    List<Booking> getBookings();
    Discount getDiscount();

}
