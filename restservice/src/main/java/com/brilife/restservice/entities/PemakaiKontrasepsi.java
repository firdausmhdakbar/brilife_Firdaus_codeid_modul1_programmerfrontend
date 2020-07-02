package com.brilife.restservice.entities;

import javax.persistence.*;
import java.io.Serializable;


@Table(name = "list_pemakai_kontrasepsi")
@Entity
public class PemakaiKontrasepsi implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_list")
    private Integer id;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Propinsi propinsi;

    private Integer jumlahPemakai;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Kontrasepsi kontrasepsi;

    public PemakaiKontrasepsi() {
    }

    public PemakaiKontrasepsi(Propinsi propinsi, Integer jumlahPemakai, Kontrasepsi kontrasepsi) {
        this.propinsi = propinsi;
        this.jumlahPemakai = jumlahPemakai;
        this.kontrasepsi = kontrasepsi;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Propinsi getPropinsi() {
        return propinsi;
    }

    public void setPropinsi(Propinsi propinsi) {
        this.propinsi = propinsi;
    }

    public Integer getJumlahPemakai() {
        return jumlahPemakai;
    }

    public void setJumlahPemakai(Integer jumlahPemakai) {
        this.jumlahPemakai = jumlahPemakai;
    }

    public Kontrasepsi getKontrasepsi() {
        return kontrasepsi;
    }

    public void setKontrasepsi(Kontrasepsi kontrasepsi) {
        this.kontrasepsi = kontrasepsi;
    }

    @Override
    public String toString() {
        return "PemakaiKontrasepsi{" +
                "id=" + id +
                ", propinsi=" + propinsi +
                ", jumlahPemakai=" + jumlahPemakai +
                ", kontrasepsi=" + kontrasepsi +
                '}';
    }
}

