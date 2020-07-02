package com.brilife.restservice.repositories;

import com.brilife.restservice.entities.Propinsi;
import java.util.List;

public interface PropinsiRepositoryCustom {
    public List<Propinsi> findByNameLike(String name);
}
