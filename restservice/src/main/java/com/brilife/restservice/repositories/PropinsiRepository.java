package com.brilife.restservice.repositories;

import com.brilife.restservice.entities.Propinsi;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface PropinsiRepository extends JpaRepository<Propinsi, Integer>, PropinsiRepositoryCustom {

    public List<Propinsi> findByNamaPropinsi(String name);
}