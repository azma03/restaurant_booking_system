package tests;


import com.codeclan.example.restaurant.models.Booth;
import com.codeclan.example.restaurant.models.Restaurant;
import com.codeclan.example.restaurant.repositories.booths.BoothRepository;
import com.codeclan.example.restaurant.repositories.restaurants.RestaurantRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static junit.framework.TestCase.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RestaurantTest {

    @Autowired
    RestaurantRepository restaurantRepository;

    @Autowired
    BoothRepository boothRepository;


    Booth booth1;
    Restaurant restaurant1;




    @Before
    public void setUp() throws Exception {
        restaurant1 = new Restaurant("Best Steaks");
        restaurantRepository.save(restaurant1);
        booth1 = new Booth(restaurant1, 2);
        boothRepository.save(booth1);

    }

    @Test
    public void contextLoads() {
    }

    @Test
    public void canGetName() {
        assertEquals("Best Steaks", restaurant1.getName());
    }



    @Test
    public void canGetNumberOfBooths() {

        assertEquals(1, restaurant1.countBooths());
    }


}
