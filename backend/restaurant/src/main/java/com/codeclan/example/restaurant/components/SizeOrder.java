package com.codeclan.example.restaurant.components;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.criterion.CriteriaQuery;
import org.hibernate.criterion.Order;
import org.hibernate.persister.collection.QueryableCollection;
import org.hibernate.persister.entity.Loadable;
import org.hibernate.sql.ConditionFragment;

//            Reference
//            https://stackoverflow.com/questions/31855253/hibernate-criteria-order-by-count-of-child-records

public class SizeOrder extends Order {
    protected String propertyName;
    protected boolean ascending;

    protected SizeOrder(String propertyName, boolean ascending) {
        super(propertyName, ascending);
        this.propertyName = propertyName;
        this.ascending = ascending;
    }

    public String toSqlString(Criteria criteria, CriteriaQuery criteriaQuery) throws HibernateException {
        String role = criteriaQuery.getEntityName(criteria, propertyName) + '.' + criteriaQuery.getPropertyName(propertyName);
        QueryableCollection cp = (QueryableCollection) criteriaQuery.getFactory().getCollectionPersister(role);

        String[] fk = cp.getKeyColumnNames();
        String[] pk = ((Loadable) cp.getOwnerEntityPersister())
                .getIdentifierColumnNames();
        return " (select count(*) from " + cp.getTableName() + " where "
                + new ConditionFragment()
                .setTableAlias(
                        criteriaQuery.getSQLAlias(criteria, propertyName)
                ).setCondition(pk, fk)
                .toFragmentString() + ") "
                + (ascending ? "asc" : "desc");
    }

    public static SizeOrder asc(String propertyName) {
        return new SizeOrder(propertyName, true);
    }
    public static SizeOrder desc(String propertyName) {
        return new SizeOrder(propertyName, false);
    }
}
