package com.codeclan.example.restaurant.repositories.booths;

import com.codeclan.example.restaurant.models.Booth;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoothRepository extends JpaRepository<Booth, Long> {
}
