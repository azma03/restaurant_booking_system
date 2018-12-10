package com.codeclan.example.restaurant.repositories.receipts;

import com.codeclan.example.restaurant.models.Item;
import com.codeclan.example.restaurant.models.Receipt;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Property;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

public class ReceiptRepositoryImpl implements ReceiptRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Receipt> calculateTotalAmount(Long receiptId) {
        List<Receipt> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Receipt.class, "r");
            cr.add(Restrictions.eq("r.id", receiptId));
            cr.setProjection(Property.forName("r.total"));
            results = cr.list();

        } catch(HibernateException ex){
            ex.printStackTrace();
        } finally {
            session.close();
        }

        return results;
    }
}
