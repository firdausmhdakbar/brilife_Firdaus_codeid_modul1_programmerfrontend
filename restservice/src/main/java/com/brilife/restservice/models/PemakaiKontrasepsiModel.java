package com.brilife.restservice.models;

import com.brilife.restservice.entities.Kontrasepsi;
import com.brilife.restservice.entities.Propinsi;
import javax.validation.constraints.NotNull;


public class PemakaiKontrasepsiModel {

    private Integer id;

    @NotNull(message = "{qty.notnull}")
    private Propinsi propinsi;

    @NotNull(message = "{jumahPemakai.notnull}")
    private Integer jumlahPemakai;

    @NotNull(message = "{qty.notnull}")
    private Kontrasepsi kontrasepsi;

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
        return "PemakaiKontrasepsiModel{" +
                "id=" + id +
                ", propinsi=" + propinsi +
                ", jumlahPemakai=" + jumlahPemakai +
                ", kontrasepsi=" + kontrasepsi +
                '}';
    }
}
