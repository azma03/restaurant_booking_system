package tests;

import com.codeclan.example.restaurant.models.Receipt;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ReceiptTest {

    Receipt receipt;

    @Before
    public void setUp() throws Exception {
        receipt = new Receipt();
    }

    @Test
    public void canGetNumberOfFoodItems() {
        assertEquals(0, receipt.itemCount());
    }
}
