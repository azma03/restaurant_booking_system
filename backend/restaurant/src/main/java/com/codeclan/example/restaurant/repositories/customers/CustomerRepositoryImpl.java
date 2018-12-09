package com.codeclan.example.restaurant.repositories.customers;

import com.codeclan.example.restaurant.models.Booking;
import com.codeclan.example.restaurant.models.Customer;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

public class CustomerRepositoryImpl implements CustomerRepositoryCustom {
    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Booking> getCustomerVisitCount(Long customerId) {
        List<Booking> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Booking.class, "b");
            cr.add(Restrictions.eq("b.customer.id", customerId));
            cr.setProjection(Projections.projectionList().add(Projections.count("b.id")));
            results = cr.list();

        } catch(HibernateException ex){
            ex.printStackTrace();
        } finally {
            session.close();
        }

        return results;

    }
}
