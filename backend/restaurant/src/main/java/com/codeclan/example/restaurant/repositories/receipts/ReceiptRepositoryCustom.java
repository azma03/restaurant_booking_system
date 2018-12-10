package com.codeclan.example.restaurant.repositories.receipts;

import com.codeclan.example.restaurant.models.Receipt;

import java.util.List;

public interface ReceiptRepositoryCustom {
    List<Receipt> calculateTotalAmount(Long receiptId);
}
