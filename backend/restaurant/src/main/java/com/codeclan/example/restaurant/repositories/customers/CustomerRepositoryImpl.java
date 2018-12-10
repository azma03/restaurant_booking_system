package com.codeclan.example.restaurant.repositories.customers;

import com.codeclan.example.restaurant.components.SizeOrder;
import com.codeclan.example.restaurant.models.Booking;
import com.codeclan.example.restaurant.models.Customer;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.query.criteria.internal.expression.function.AggregationFunction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

import javax.persistence.OrderBy;
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

    @Transactional
    public List<Customer> getCustomersByVisitFrequency() {
        List<Customer> results = null;
        Session session = entityManager.unwrap(Session.class);

        try{

            Criteria cr = session.createCriteria(Customer.class, "c");
            cr.addOrder(SizeOrder.desc("c.bookings"));

            results =  cr.list();

        } catch(HibernateException ex){
            ex.printStackTrace();
        } finally {
            session.close();
        }


        return results;
    }

    @Transactional
    public List<Booking> getCustomerTotalSpendings(Long customerId) {
        List<Booking> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Booking.class, "b");
            cr.add(Restrictions.eq("b.customer.id", customerId));
            cr.createAlias("b.receipt", "r");
            cr.setProjection(Projections.projectionList().add(Projections.sum("r.total")));
            results = cr.list();

        } catch(HibernateException ex){
            ex.printStackTrace();
        } finally {
            session.close();
        }

        return results;
    }
}


// https://www.boraji.com/hibernate-5-criteria-query-example
//https://docs.jboss.org/hibernate/orm/3.3/reference/en/html/querycriteria.html