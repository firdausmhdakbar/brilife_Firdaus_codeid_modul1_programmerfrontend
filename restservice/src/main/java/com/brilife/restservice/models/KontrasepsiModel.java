package com.brilife.restservice.models;


import com.brilife.restservice.validation.annotations.MinLength;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.validation.constraints.NotBlank;

@ApiModel(value = "KontrasepsiService", description = "KontrasepsiService Description..")

public class KontrasepsiModel {

    @ApiModelProperty(value = "Propinsi ID")
    private Integer id;

    @ApiModelProperty(value = "Propinsi ID")
    @MinLength(3)
    @NotBlank(message = "{name.notblank}")
    private String namaKontrasepsi;

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
        return "KontrasepsiModel{" +
                "id=" + id +
                ", namaKontrasepsi='" + namaKontrasepsi + '\'' +
                '}';
    }
}
