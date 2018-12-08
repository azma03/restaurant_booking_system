package com.codeclan.example.restaurant.projections;

import com.codeclan.example.restaurant.models.*;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;

@Projection(name = "embedToBooking", types = Booking.class)
public interface EmbedToBooking {
    Long getId();
    Booth getBooth();
    Customer getCustomer();
    int getPartySize();
    Date getDate();
    TimeSlot getTimeSlot();
    Receipt getReceipt();
}
