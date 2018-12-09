package com.codeclan.example.restaurant.controllers;

import com.codeclan.example.restaurant.models.Booking;
import com.codeclan.example.restaurant.models.Customer;
import com.codeclan.example.restaurant.repositories.bookings.BookingRepository;
import com.codeclan.example.restaurant.repositories.customers.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/bookings")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping(value = "/visitCount/customer/{customerId}")
    public List<Booking> getCustomerVisitCount(@PathVariable int customerId){
        return bookingRepository.getCustomerVisitCount(customerId);
    }
}
