package com.codeclan.example.restaurant.repositories.booths;

import com.codeclan.example.restaurant.models.Booth;
import com.codeclan.example.restaurant.projections.EmbedToBooth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedToBooth.class)
public interface BoothRepository extends JpaRepository<Booth, Long> {
}
