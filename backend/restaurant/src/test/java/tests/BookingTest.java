package tests;

import com.codeclan.example.restaurant.models.*;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.text.SimpleDateFormat;
import java.util.Date;


import static org.junit.Assert.assertEquals;
@RunWith(SpringRunner.class)
@SpringBootTest
public class BookingTest {
    SimpleDateFormat dateFormat;
    Date booking1Date;
    Date booking2Date;

    Booking booking;
    Customer customer1;
    Customer customer2;
    Booth booth;

    @Before
    public void setUp() throws Exception {

        dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        booking1Date = dateFormat.parse("11/12/2018");
        booking2Date = dateFormat.parse("12/12/2018");
        booking = new Booking(booth, customer1, 2, booking1Date, TimeSlot.Four);
    }

    @Test
    public void canGetBooth() {
        assertEquals(booth, booking.getBooth());
    }

    @Test
    public void canGetCustomer() {
        assertEquals(customer1, booking.getCustomer());
    }

    @Test
    public void canChangeCustomer() {
        booking.setCustomer(customer2);
        assertEquals(customer2, booking.getCustomer());
    }

    @Test
    public void canGetDate() {
        assertEquals(booking1Date, booking.getDate());
        assertEquals("Tue Dec 11 00:00:00 GMT 2018", booking.getDateValue());
    }

    @Test
    public void canChangeDate() {
        booking.setDate(booking2Date);
        assertEquals(booking2Date, booking.getDate());
        assertEquals("Wed Dec 12 00:00:00 GMT 2018", booking.getDateValue());

    }

    @Test
    public void getTimeSlot() {
        assertEquals(TimeSlot.Four, booking.getTimeSlot());
    }

    @Test
    public void changeTimeSlot() {
        booking.setTimeSlot(TimeSlot.Eight);
        assertEquals(TimeSlot.Eight, booking.getTimeSlot());
    }

    @Test
    public void canGetPartySize() {
        assertEquals(2, booking.getPartySize());
    }

    @Test
    public void canChangePartySize() {
        booking.setPartySize(1);
        assertEquals(1, booking.getPartySize());
    }
}
