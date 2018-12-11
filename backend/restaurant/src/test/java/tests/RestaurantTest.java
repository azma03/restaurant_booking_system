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









    @Test
    public void contextLoads() {
    }

    @Test
    public void canGetName() {
        Restaurant restaurant1 = new Restaurant("Best Steaks");
        restaurantRepository.save(restaurant1);

        Booth booth1 = new Booth(restaurant1, 2);
        boothRepository.save(booth1);
        assertEquals("Best Steaks", restaurant1.getName());
    }



    @Test
    public void canGetNumberOfBooths() {
        Restaurant restaurant1 = new Restaurant("Best Steaks");
        restaurantRepository.save(restaurant1);

        Booth booth1 = new Booth(restaurant1, 2);
        boothRepository.save(booth1);

        assertEquals(1, restaurant1.countBooths());
    }


}
