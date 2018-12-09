package com.codeclan.example.restaurant.repositories.bookings;

import com.codeclan.example.restaurant.models.Booking;
import com.codeclan.example.restaurant.projections.EmbedToBooking;
import com.codeclan.example.restaurant.repositories.booths.BoothRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedToBooking.class)
public interface BookingRepository extends JpaRepository<Booking, Long>, BoothRepositoryCustom {
}
