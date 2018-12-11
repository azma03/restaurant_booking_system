package com.codeclan.example.restaurant.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Table;

@Entity
@Table(name = "booths")

public class Booth{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @JsonIgnoreProperties("booths")
    @ManyToOne
    @JoinColumn(name = "restaurant_id", nullable = false)
    private Restaurant restaurant;

    @Column
    private int capacity;

    @Column
    private boolean available;

    @OneToMany(mappedBy = "booth", fetch = FetchType.LAZY)
    private List<Booking> bookings;


    public Booth(Restaurant restaurant, int capacity) {
        this.restaurant = restaurant;
        this.capacity = capacity;
        this.available = true;
        this.bookings = new ArrayList<Booking>();

    }

    public Booth() {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = Id;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public boolean getAvailability() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}
