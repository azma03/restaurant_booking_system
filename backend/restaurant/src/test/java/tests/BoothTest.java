package tests;

import com.codeclan.example.restaurant.models.Booth;
import com.codeclan.example.restaurant.models.Restaurant;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
@RunWith(SpringRunner.class)
@SpringBootTest
public class BoothTest {
    Booth booth;
    Restaurant restaurant;

    @Before
    public void setUp() throws Exception {
        restaurant = new Restaurant("Best Steaks");
        booth = new Booth(restaurant, 5);

    }

    @Test
    public void canGetRestaurant() {
        assertEquals(restaurant, booth.getRestaurant());
    }

    @Test
    public void canGetCapacity() {
        assertEquals(5, booth.getCapacity());
    }

    @Test
    public void canGetAvailability() {
        assertEquals(true, booth.getAvailability());
    }

    @Test
    public void canMakeBoothUnavailable() {
        booth.setAvailable(false);
        assertEquals(false, booth.getAvailability());
    }


}
