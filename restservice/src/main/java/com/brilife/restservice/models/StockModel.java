package com.enigma.restservice.models;

import com.enigma.restservice.entities.Item;
import com.enigma.restservice.entities.Unit;
import javax.validation.constraints.NotNull;


public class StockModel {

    private Integer id;

    @NotNull(message = "{qty.notnull}")
    private Item item;

    @NotNull(message = "{qty.notnull}")
    private Integer quantity;

    @NotNull(message = "{qty.notnull}")
    private Unit unit;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Unit getUnit() {
        return unit;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    @Override
    public String toString() {
        return "StockModel{" +
                "id=" + id +
                ", item=" + item +
                ", quantity=" + quantity +
                ", unit=" + unit +
                '}';
    }
}
