package com.enigma.restservice.models;

import com.enigma.restservice.validation.annotations.MinLength;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.validation.constraints.NotBlank;

@ApiModel(value = "Item", description = "Item Description..")
public class ItemModel {

    @ApiModelProperty(value = "Item ID")
    private Integer id;

    @ApiModelProperty(value = "Item ID")
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
        return "ItemModel{" + "id=" + id + ", name='" + name + '\'' + '}';
    }
}


