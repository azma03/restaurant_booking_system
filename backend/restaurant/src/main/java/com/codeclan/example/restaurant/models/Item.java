package com.codeclan.example.restaurant.models;

public enum Item {
    Soup(3.0),
    PrawnCocktail(4.50),
    Haggis(6),
    Pizza(9.0),
    Chateaubriand(25),
    GoatsCheeseTart(7),
    MoltenLavaCake(6.70),
    BakedAlaska(9.90),
    CheeseAndBiscuits(8.0),
    SparklingWater(2.50),
    HouseRedWine(3.50),
    CokeOrPepsi(1.99);

    private final double value;

    Item(double value) {
        this.value = value;
    }

    public double getValue() {
        return value;
    }
}