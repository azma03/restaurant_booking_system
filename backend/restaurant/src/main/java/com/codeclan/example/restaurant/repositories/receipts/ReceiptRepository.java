package com.codeclan.example.restaurant.repositories.receipts;

import com.codeclan.example.restaurant.models.Receipt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceiptRepository extends JpaRepository<Receipt, Long> {
}
