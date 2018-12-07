package com.codeclan.example.restaurant.components;

import com.codeclan.example.restaurant.models.*;
import com.codeclan.example.restaurant.repositories.bookings.BookingRepository;
import com.codeclan.example.restaurant.repositories.booths.BoothRepository;
import com.codeclan.example.restaurant.repositories.customers.CustomerRepository;
import com.codeclan.example.restaurant.repositories.receipts.ReceiptRepository;
import com.codeclan.example.restaurant.repositories.restaurants.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    RestaurantRepository restaurantRepository;

    @Autowired
    BoothRepository boothRepository;

    @Autowired
    CustomerRepository customerRepository;

//    @Autowired
//    ReceiptRepository receiptRepository;

    @Autowired
    BookingRepository bookingRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        SimpleDateFormat dateFormat;
        Date booking1Date, booking2Date, booking3Date;

        Restaurant restaurant = new Restaurant("iRestaurant");
        restaurantRepository.save(restaurant);
        Booth booth1 = new Booth(restaurant, 2);
        boothRepository.save(booth1);

        Booth booth2 = new Booth(restaurant, 2);
        boothRepository.save(booth2);

        Booth booth3 = new Booth(restaurant, 4);
        boothRepository.save(booth3);

        Booth booth4 = new Booth(restaurant, 4);
        boothRepository.save(booth4);

        Booth booth5 = new Booth(restaurant, 6);
        boothRepository.save(booth5);

        Booth booth6 = new Booth(restaurant, 6);
        boothRepository.save(booth6);

        Customer customer1 = new Customer("Andrew", "andrew@gmail.com", "0123456789");
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Asma", "asma@gmail.com", "0123456789");
        customerRepository.save(customer2);

        Customer customer3 = new Customer("Stephen", "stephen@gmail.com", "0123456789");
        customerRepository.save(customer3);

//        Receipt receipt1 = new Receipt();
//        receiptRepository.save(receipt1);
//
//        Receipt receipt2 = new Receipt();
//        receiptRepository.save(receipt2);
//
//        Receipt receipt3 = new Receipt();
//        receiptRepository.save(receipt3);

        dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        booking1Date = dateFormat.parse("11/12/2018");

        Booking booking1 = new Booking(booth1, customer1, 2, booking1Date, TimeSlot.Four);
        bookingRepository.save(booking1);

        booking2Date = dateFormat.parse("11/12/2018");
        Booking booking2 = new Booking(booth3, customer2, 4, booking2Date, TimeSlot.Eight);
        bookingRepository.save(booking2);

        booking3Date = dateFormat.parse("11/12/2018");
        Booking booking3 = new Booking(booth6, customer3, 6,  booking3Date, TimeSlot.Nine);
        bookingRepository.save(booking3);

    }
}
