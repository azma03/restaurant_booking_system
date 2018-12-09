package com.codeclan.example.restaurant.repositories.receipts;

import com.codeclan.example.restaurant.models.Receipt;
import com.codeclan.example.restaurant.projections.EmbedToReceipt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedToReceipt.class)
public interface ReceiptRepository extends JpaRepository<Receipt, Long>, ReceiptRepositoryCustom {
}
