package com.codeclan.example.restaurant.controllers;

import com.codeclan.example.restaurant.repositories.bookings.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/bookings")
public class BookingController {
    @Autowired
    BookingRepository bookingRepository;
}
