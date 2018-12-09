package com.codeclan.example.restaurant.repositories.customers;

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
    public List<Customer> getCustomersByVisitFrequency() {
        List<Customer> results = null;
        Session session = entityManager.unwrap(Session.class);

        try{
            Criteria cr = session.createCriteria(Customer.class, "c");
//            cr.createAlias("c.bookings", "bookings").addOrder(Order.desc("bookings.id"));
            cr.createAlias("c.bookings", "bookings");
//            cr.setProjection(Projections.projectionList().add(Projections.count("bookings.id"), "countBookings"));
//            cr.addOrder(Order.desc("countBookings"));


//            cr.createAlias("c.bookings", "bookings");   //s: customer.bookings, s1: Alias for the Booking class
//            cr.createCriteria("bookings").addOrder(Order.desc("bookings.id"));
//            cr.setProjection(Projections.count("bookings.id").as("BookingCount"));
            cr.setProjection(Projections.projectionList().add(Projections.groupProperty("bookings.Id"))
                    .add(Projections.count("bookings.id").as("BookingCount")));
            cr.addOrder(Order.desc("BookingCount"));



//            cr.addOrder(Order.desc("bookings"));
//            cr.createCriteria("bookings").add(Restrictions.eq("partySize", 2));
//            cr.createAlias("customers", "customer");
//            cr.add(Restrictions.eq("name", "Asma"));
            results = (List<Customer>) cr.list();

//            hibernateSession.createCriteria(UserGroup.class).addOrder( SizeOrder.asc("members") ).list();
//
//            session.createCriteria(News.class, "n");
//            criteria.createAlias("n.comments", "comments");
//            criteria.setProjection(Projections.projectionList()
//                    .add(Projections.groupProperty("comments.id"))
//                    .add(Projections.count("comments.id").as("numberOfComments")));
//            criteria.addOrder(Order.desc("numberOfComments"));
//            List<News> news = criteria.list();


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