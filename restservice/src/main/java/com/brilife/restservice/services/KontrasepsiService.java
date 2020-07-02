package com.brilife.restservice.services;

import com.brilife.restservice.entities.Kontrasepsi;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;

public interface KontrasepsiService extends CommonService<Kontrasepsi, Integer> {

    Kontrasepsi save(Kontrasepsi entity);

    Kontrasepsi removeById(Integer integer);

    Kontrasepsi findById(Integer integer);

    Page<Kontrasepsi> findAll(Kontrasepsi entity, int page, int size, Sort.Direction direction);
}
