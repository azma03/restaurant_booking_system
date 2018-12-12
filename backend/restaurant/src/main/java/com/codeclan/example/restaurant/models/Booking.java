package com.codeclan.example.restaurant.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @JsonIgnoreProperties("bookings")
    @ManyToOne
    @JoinColumn(name = "booth_id", nullable = false)
    private Booth booth;

    @JsonIgnoreProperties("bookings")
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @Column
    private int partySize;

    @JsonIgnoreProperties("booking")
    @OneToOne(fetch = FetchType.LAZY, mappedBy = "booking", cascade = CascadeType.ALL)
    private Receipt receipt;

    @DateTimeFormat(pattern = "dd/MM/yyyy") // This is for bind Date with @ModelAttribute
    @Temporal(TemporalType.DATE)
    @Column
    private Date date;

    @Column
    private TimeSlot timeSlot;

    public Booking(Booth booth, Customer customer, int partySize, Date date, TimeSlot timeSlot) {
        this.booth = booth;
        this.customer = customer;
        this.partySize = partySize;
        this.receipt = null;
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

    public Receipt getReceipt() {
        return receipt;
    }

    public void setReceipt(Receipt receipt) {
        this.receipt = receipt;
    }

    public Date getDate() {
//        SimpleDateFormat dateFormat;
//        dateFormat = new SimpleDateFormat("dd/MM/yyyy");
//        return dateFormat.parse(date);
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

    public String getDateValue() {
        return this.date.toString();
    }
    public int getTimeSlotValue(){
        return this.timeSlot.getValue();
    }

    public double getReceiptTotal(){
        if(this.receipt == null)
            return 0;
        else return this.receipt.getTotal();
    }
}
