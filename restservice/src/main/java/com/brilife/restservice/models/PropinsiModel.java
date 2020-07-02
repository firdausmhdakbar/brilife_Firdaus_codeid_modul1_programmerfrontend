package com.brilife.restservice.models;

import com.brilife.restservice.validation.annotations.MinLength;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import javax.validation.constraints.NotBlank;

@ApiModel(value = "Propinsi", description = "Propinsi Description..")
public class PropinsiModel {

    @ApiModelProperty(value = "Propinsi ID")
    private Integer id;

    @ApiModelProperty(value = "Propinsi ID")
    @MinLength(3)
    @NotBlank(message = "{name.notblank}")
    private String namaPropinsi;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNamePropinsi() {
        return namaPropinsi;
    }

    public void setNamaPropinsi(String namaPropinsi) {
        this.namaPropinsi = namaPropinsi;
    }

    @Override
    public String toString() {
        return "PropinsiModel{" + "id=" + id + ", namaPropinsi='" + namaPropinsi + '\'' + '}';
    }
}


