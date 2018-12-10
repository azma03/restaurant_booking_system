package com.codeclan.example.restaurant.repositories.customers;

import com.codeclan.example.restaurant.models.Booking;
import com.codeclan.example.restaurant.models.Customer;

import java.util.List;

public interface CustomerRepositoryCustom {


    List<Customer> getCustomersByVisitFrequency();
    List<Booking> getCustomerVisitCount(Long customerId);
    List<Booking> getCustomerTotalSpendings(Long customerId);

}
