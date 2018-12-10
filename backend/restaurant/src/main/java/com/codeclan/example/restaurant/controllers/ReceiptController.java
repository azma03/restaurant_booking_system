package com.codeclan.example.restaurant.controllers;

import com.codeclan.example.restaurant.models.Item;
import com.codeclan.example.restaurant.models.Receipt;
import com.codeclan.example.restaurant.repositories.receipts.ReceiptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/receipts")
public class ReceiptController {

    @Autowired
    ReceiptRepository receiptRepository;

    @GetMapping(value = "/{receiptId}/totalAmount")
    public List<Receipt> calculateTotaAmount(@PathVariable Long receiptId){
        return receiptRepository.calculateTotalAmount(receiptId);
    }
}
