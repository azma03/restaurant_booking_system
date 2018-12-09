package com.codeclan.example.restaurant.repositories.bookings;

import com.codeclan.example.restaurant.models.Booking;
import com.codeclan.example.restaurant.models.Customer;

import java.util.List;

public interface BookingRepositoryCustom {
    List<Booking> getCustomerVisitCount(int customerId);
}
