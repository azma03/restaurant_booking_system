package com.codeclan.example.restaurant.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.awt.print.Book;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "receipts")
public class Receipt {

//    @GenericGenerator(name = "generator", strategy = "foreign",
//            parameters = @Parameter(name = "property", value = "booking"))
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @Column
//    private List<Item> items;

    @OneToOne(fetch = FetchType.LAZY)
    @PrimaryKeyJoinColumn
    private Booking booking;

//    public Receipt() {
////        this.items = new ArrayList<Item>();
//        this.booking = new Booking();
//    }

    public Receipt() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

//    public List<Item> getItems() {
//        return items;
//    }
//
//    public void setItems(List<Item> items) {
//        this.items = items;
//    }


    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}


//OneToOneMapping
//https://www.mkyong.com/hibernate/hibernate-one-to-one-relationship-example-annotation/