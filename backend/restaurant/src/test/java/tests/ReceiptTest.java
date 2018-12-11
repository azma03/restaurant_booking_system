package tests;

import com.codeclan.example.restaurant.models.Receipt;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
@RunWith(SpringRunner.class)
@SpringBootTest
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
