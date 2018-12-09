package com.codeclan.example.restaurant.repositories.customers;


import com.codeclan.example.restaurant.models.Customer;
import com.codeclan.example.restaurant.projections.EmbedToCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedToCustomer.class)
public interface CustomerRepository extends JpaRepository<Customer, Long>, CustomerRepositoryCustom {
}
