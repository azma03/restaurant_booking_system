package com.codeclan.example.restaurant.controllers;

import com.codeclan.example.restaurant.models.Booking;

import com.codeclan.example.restaurant.models.Customer;
import com.codeclan.example.restaurant.repositories.customers.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "api/customers")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;


    @GetMapping(value = "/sortBy/frequencyVisit")
    public List<Customer> getCustomersByVisitFrequency(){
        return customerRepository.getCustomersByVisitFrequency();
    }


    @GetMapping(value = "/{customerId}/visitCount")
    public List<Booking> getCustomerVisitCount(@PathVariable Long customerId){
        return customerRepository.getCustomerVisitCount(customerId);
    }


    @GetMapping(value = "/{customerId}/totalSpendings")
    public List<Booking> getCustomerTotalSpendings(@PathVariable Long customerId){
        return customerRepository.getCustomerTotalSpendings(customerId);
    }

}

