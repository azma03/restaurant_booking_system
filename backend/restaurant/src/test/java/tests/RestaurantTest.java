package tests;

import com.codeclan.example.restaurant.models.Restaurant;
import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class RestaurantTest {
    Restaurant restaurant;

    @Before
    public void setUp() throws Exception {
        restaurant = new Restaurant("Best Steaks");
    }

    @Test
    public void canGetName() {
        assertEquals("Best Steaks", restaurant.getName());
    }
}
