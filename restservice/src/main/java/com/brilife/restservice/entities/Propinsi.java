package com.brilife.restservice.entities;

import javax.persistence.*;
import java.io.Serializable;

@Table(name = "list_propinsi")
@Entity
public class Propinsi implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_propinsi")
    private Integer id;

    @Column(nullable = false)
    private String namaPropinsi;

    public  Propinsi() {

    }

    public Propinsi(String namaPropinsi) {
        this.namaPropinsi = namaPropinsi;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNamaPropinsi() {
        return namaPropinsi;
    }

    public void setNamaPropinsi(String namaPropinsi) {
        this.namaPropinsi = namaPropinsi;
    }

    @Override
    public String toString() {
        return "Propinsi{" +
                "id=" + id +
                ", namaPropinsi='" + namaPropinsi + '\'' +
                '}';
    }
}