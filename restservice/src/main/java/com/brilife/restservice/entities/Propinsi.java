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
    private String name;

    public Propinsi() {

    }

    public Propinsi(String name) {
        this.name = name;
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
        return "Propinsi{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}