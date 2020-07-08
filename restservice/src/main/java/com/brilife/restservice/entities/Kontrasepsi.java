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
    private String name;

    public Kontrasepsi(String name) {
        this.name = name;
    }

    public Kontrasepsi() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Kontrasepsi{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}