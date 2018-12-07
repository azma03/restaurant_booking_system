package com.codeclan.example.restaurant.models;

public enum TimeSlot {

    One (1),
    Two (2),
    Three (3),
    Four (4),
    Five (5),
    Six (6),
    Seven (7),
    Eight (8),
    Nine (9),
    Ten (10),
    Eleven (11);

    private final int value;

    TimeSlot(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}