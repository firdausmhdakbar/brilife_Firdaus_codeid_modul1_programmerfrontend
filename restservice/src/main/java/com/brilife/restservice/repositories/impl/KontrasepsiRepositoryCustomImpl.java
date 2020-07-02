package com.brilife.restservice.repositories.impl;

import com.brilife.restservice.entities.Kontrasepsi;
import com.brilife.restservice.repositories.KontrasepsiRepositoryCustom;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

public class KontrasepsiRepositoryCustomImpl implements KontrasepsiRepositoryCustom {

    @Autowired
    private EntityManager entityManager;

    public List<Kontrasepsi> findByNameLike(String name) {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Kontrasepsi> query = builder.createQuery(Kontrasepsi.class);
        Root<Kontrasepsi> root = query.from(Kontrasepsi.class);
        query.where(builder.like(root.get("name"), "%" + name + "%"));
        return entityManager.createQuery(query).getResultList();
    }
}
