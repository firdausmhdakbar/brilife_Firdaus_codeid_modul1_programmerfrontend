package com.brilife.restservice.repositories.impl;

import com.brilife.restservice.entities.Propinsi;
import com.brilife.restservice.repositories.PropinsiRepositoryCustom;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

class PropinsiRepositoryCustomImpl implements PropinsiRepositoryCustom {

    @Autowired
    private EntityManager entityManager;

    public List<Propinsi> findByNameLike(String name) {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Propinsi> query = builder.createQuery(Propinsi.class);
        Root<Propinsi> root = query.from(Propinsi.class);
        query.where(builder.like(root.get("name"), "%" + name + "%"));
        return entityManager.createQuery(query).getResultList();
    }
}

