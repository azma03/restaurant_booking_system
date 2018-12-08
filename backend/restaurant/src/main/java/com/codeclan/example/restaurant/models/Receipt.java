package com.codeclan.example.restaurant.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.awt.print.Book;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "receipts")
public class Receipt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @Enumerated
    @ElementCollection(targetClass = Item.class)
    private List<Item> items;

    @OneToOne(fetch = FetchType.LAZY)
    @PrimaryKeyJoinColumn
    private Booking booking;

    public Receipt(Booking booking) {
        this.items = new ArrayList<Item>();
        this.booking = booking;
    }

    public Receipt() {
        this.items = new ArrayList<Item>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public int itemCount() {
        return this.items.size();
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }

    public void addItem(Item item){
        this.items.add(item);
    }

    public void removeItem(Item item){
        this.items.remove(item);

    }
}


//OneToOneMapping
//https://www.mkyong.com/hibernate/hibernate-one-to-one-relationship-example-annotation/