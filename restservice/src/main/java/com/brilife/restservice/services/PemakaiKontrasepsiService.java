package com.brilife.restservice.services;

import com.brilife.restservice.entities.PemakaiKontrasepsi;
import com.brilife.restservice.summaries.PemakaiKontrasepsiSummary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface PemakaiKontrasepsiService {

    public PemakaiKontrasepsiService save(PemakaiKontrasepsi entity);

    public PemakaiKontrasepsi removeById(Integer id);

    public PemakaiKontrasepsi findById(Integer id);

    public Page<PemakaiKontrasepsi> findAll(PemakaiKontrasepsi entity, int page, int size, Sort.Direction direction);

    public List<PemakaiKontrasepsiSummary> listSummaryPemakaiKontrasepsi();

}
