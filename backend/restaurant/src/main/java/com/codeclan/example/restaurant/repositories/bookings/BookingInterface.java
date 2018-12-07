package com.codeclan.example.restaurant.repositories.bookings;

import com.codeclan.example.restaurant.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingInterface extends JpaRepository<Booking, Long> {
}
