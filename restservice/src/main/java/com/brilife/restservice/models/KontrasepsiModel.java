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
    private String name;

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
        return "KontrasepsiModel{" +
                "id=" + id +
                ", namaKontrasepsi='" + name + '\'' +
                '}';
    }
}
