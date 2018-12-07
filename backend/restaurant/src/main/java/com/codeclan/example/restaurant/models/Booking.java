package com.codeclan.example.restaurant.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @ManyToOne
    @JoinColumn(name = "booth_id", nullable = false)
    private Booth booth;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @Column
    private int partySize;

//    @OneToOne(mappedBy = "receipt", fetch = FetchType.LAZY)
//    private Receipt receipt;

    @Column
    private Date date;

    @Column
    private TimeSlot timeSlot;

    public Booking(Booth booth, Customer customer, int partySize, Date date, TimeSlot timeSlot) {
        this.booth = booth;
        this.customer = customer;
        this.partySize = partySize;
//        this.receipt = null;
        this.date = date;
        this.timeSlot = timeSlot;
    }

    public Booking() {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Booth getBooth() {
        return booth;
    }

    public void setBooth(Booth booth) {
        this.booth = booth;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public int getPartySize() {
        return partySize;
    }

    public void setPartySize(int partySize) {
        this.partySize = partySize;
    }

//    public Receipt getReceipt() {
//        return receipt;
//    }
//
//    public void setReceipt(Receipt receipt) {
//        this.receipt = receipt;
//    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public TimeSlot getTimeSlot() {
        return timeSlot;
    }

    public void setTimeSlot(TimeSlot timeSlot) {
        this.timeSlot = timeSlot;
    }
}

