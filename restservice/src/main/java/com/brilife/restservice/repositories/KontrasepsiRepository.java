package com.brilife.restservice.repositories;

import com.brilife.restservice.entities.Kontrasepsi;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KontrasepsiRepository  extends JpaRepository<Kontrasepsi, Integer>, KontrasepsiRepositoryCustom {



}
