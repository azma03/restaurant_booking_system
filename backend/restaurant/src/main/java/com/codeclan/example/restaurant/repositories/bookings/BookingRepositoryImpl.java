package com.codeclan.example.restaurant.repositories.bookings;

import com.codeclan.example.restaurant.models.*;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

public class BookingRepositoryImpl implements BookingRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Booking> getCustomerVisitCount(int customerId) {
        List<Booking> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Customer.class);
//            cr.createAlias("customer", "customer");
            cr.add(Restrictions.ne("discount", "xcv"));

            results = cr.list();


        } catch(HibernateException ex){
            ex.printStackTrace();
        } finally {
            session.close();
        }

        return results;
    }
}
