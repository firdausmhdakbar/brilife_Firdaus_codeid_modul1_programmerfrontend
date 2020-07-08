package com.brilife.restservice.repositories;

import com.brilife.restservice.entities.Propinsi;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PropinsiRepository extends JpaRepository<Propinsi, Integer>, PropinsiRepositoryCustom {

}