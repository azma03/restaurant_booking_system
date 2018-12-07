package com.codeclan.example.restaurant.models;

public enum Discount {

    NIL(0),
    BRONZE(0.05),
    SILVER(0.10),
    GOLD(0.20);

    private final double value;

    Discount(double value) {
        this.value = value;
    }

    public double getValue() {
        return value;
    }
}
