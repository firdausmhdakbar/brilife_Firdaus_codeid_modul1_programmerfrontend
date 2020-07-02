package com.brilife.restservice.repositories;

import com.brilife.restservice.entities.Kontrasepsi;

import java.util.List;

public interface KontrasepsiRepositoryCustom {
    public List<Kontrasepsi> findByNameLike(String name);
}
