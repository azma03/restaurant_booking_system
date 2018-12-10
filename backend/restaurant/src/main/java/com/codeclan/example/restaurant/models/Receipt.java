package com.codeclan.example.restaurant.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    @PrimaryKeyJoinColumn
    private Booking booking;

    @Column
    private double total;

    public Receipt(Booking booking) {
        this.items = new ArrayList<Item>();
        this.booking = booking;
        this.total = 0;
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

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public void addItem(Item item){
        this.items.add(item);
    }

    public void removeItem(Item item){
        this.items.remove(item);
    }

    public void calculateTotal(){
        for (Item item: this.items){
            this.total += item.getValue();
        }
    }
}


//OneToOneMapping
//https://www.mkyong.com/hibernate/hibernate-one-to-one-relationship-example-annotation/