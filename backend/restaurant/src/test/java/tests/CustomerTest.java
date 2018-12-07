package tests;


import com.codeclan.example.restaurant.models.Customer;
import com.codeclan.example.restaurant.models.Discount;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CustomerTest {

    Customer customer;

    @Before
    public void setUp() throws Exception {
        customer = new Customer("Andrew", "ab123@gmail.com", "07888925467");
    }

    @Test
    public void canGetName() {
        assertEquals("Andrew", customer.getName());
    }

    @Test
    public void canGetDiscountLevel() {
        assertEquals(Discount.NIL, customer.getDiscount());
    }

    @Test
    public void setDiscountLevel() {
        customer.setDiscount(Discount.GOLD);
        assertEquals(Discount.GOLD, customer.getDiscount());
    }

    @Test
    public void getDiscountValue() {
        customer.setDiscount(Discount.GOLD);
        assertEquals(0.20, customer.getValueFromEnum(), 0.01);
    }
}
