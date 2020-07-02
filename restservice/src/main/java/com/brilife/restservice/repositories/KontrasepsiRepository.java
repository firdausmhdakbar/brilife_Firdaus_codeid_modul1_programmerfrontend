package com.brilife.restservice.repositories;

import com.brilife.restservice.entities.Kontrasepsi;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface KontrasepsiRepository  extends JpaRepository<Kontrasepsi, Integer>, KontrasepsiRepositoryCustom {

    public List<Kontrasepsi> findByNamaKontrasepsi(String name);

}
