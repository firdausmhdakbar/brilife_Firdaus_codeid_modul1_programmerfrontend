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
        return "PropinsiModel{" + "id=" + id + ", namaPropinsi='" + name + '\'' + '}';
    }
}


