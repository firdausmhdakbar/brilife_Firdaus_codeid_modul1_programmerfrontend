package com.brilife.restservice.repositories;

import com.brilife.restservice.entities.PemakaiKontrasepsi;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PemakaiKontrasepsiRepository extends JpaRepository<PemakaiKontrasepsi, Integer>, PemakaiKontrasepsiRepositoryCustom {

}