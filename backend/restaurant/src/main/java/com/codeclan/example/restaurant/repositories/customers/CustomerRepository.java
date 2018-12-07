package com.codeclan.example.restaurant.repositories.customers;


import com.codeclan.example.restaurant.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
