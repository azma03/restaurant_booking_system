package com.codeclan.example.restaurant.repositories.customers;

import com.codeclan.example.restaurant.models.Customer;

import java.util.List;

public interface CustomerRepositoryCustom {

    List<Customer> getCustomersByVisitFrequency();
}
