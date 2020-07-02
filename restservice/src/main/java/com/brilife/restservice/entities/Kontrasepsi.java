package com.brilife.restservice.entities;

import javax.persistence.*;
import java.io.Serializable;

@Table(name = "list_kontrasepsi")
@Entity
public class Kontrasepsi implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_kontrasepsi")
    private Integer id;

    @Column(nullable = false)
    private String namaKontrasepsi;

    public Kontrasepsi(String namaKontrasepsi) {
        this.namaKontrasepsi = namaKontrasepsi;
    }

    public Kontrasepsi() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNamaKontrasepsi() {
        return namaKontrasepsi;
    }

    public void setNamaKontrasepsi(String namaKontrasepsi) {
        this.namaKontrasepsi = namaKontrasepsi;
    }

    @Override
    public String toString() {
        return "Kontrasepsi{" +
                "id=" + id +
                ", namaKontrasepsi='" + namaKontrasepsi + '\'' +
                '}';
    }
}