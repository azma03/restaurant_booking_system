package tests;

import Models.Customer;
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
}
