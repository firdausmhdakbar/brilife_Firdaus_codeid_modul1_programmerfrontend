package com.brilife.restservice.repositories.impl;

import com.brilife.restservice.entities.PemakaiKontrasepsi;
import com.brilife.restservice.repositories.PemakaiKontrasepsiRepositoryCustom;
import com.brilife.restservice.summaries.PemakaiKontrasepsiSummary;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

class PemakaiKontrasepsiRepositoryCustomImpl implements PemakaiKontrasepsiRepositoryCustom {

    @Autowired
    private EntityManager entityManager;

    public List<PemakaiKontrasepsiSummary> listSummaryPemakaiKontrasepsi() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<PemakaiKontrasepsiSummary> criteria = builder.createQuery(PemakaiKontrasepsiSummary.class);
        Root<PemakaiKontrasepsi> root = criteria.from(PemakaiKontrasepsi.class);

        criteria.multiselect(root.get("propinsi").get("name"), builder.sum(root.get("jumlahPemakai")))
                .groupBy(root.get("propinsi"),root.get("kontrasepsi"));
        return entityManager.createQuery(criteria).getResultList();
    }

}

