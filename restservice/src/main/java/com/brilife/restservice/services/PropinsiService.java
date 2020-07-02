package com.brilife.restservice.services;

import com.brilife.restservice.entities.Propinsi;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;

public interface PropinsiService extends CommonService<Propinsi, Integer> {

    Propinsi save(Propinsi entity);

    Propinsi removeById(Integer integer);

    Propinsi findById(Integer integer);

    Page<Propinsi> findAll(Propinsi entity, int page, int size, Sort.Direction direction);
}

