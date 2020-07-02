package com.enigma.restservice.repositories.impl;

import com.enigma.restservice.entities.Stock;
import com.enigma.restservice.repositories.StockRepositoryCustom;
import com.enigma.restservice.summaries.StockSummary;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

class StockRepositoryCustomImpl implements StockRepositoryCustom {

    @Autowired
    private EntityManager entityManager;

    public List<StockSummary> listSummaryStock() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<StockSummary> criteria = builder.createQuery(StockSummary.class);
        Root<Stock> root = criteria.from(Stock.class);

        criteria.multiselect(root.get("item").get("name"), builder.sum(root.get("quantity")))
                .groupBy(root.get("item"),root.get("unit"));
        return entityManager.createQuery(criteria).getResultList();
    }
}

