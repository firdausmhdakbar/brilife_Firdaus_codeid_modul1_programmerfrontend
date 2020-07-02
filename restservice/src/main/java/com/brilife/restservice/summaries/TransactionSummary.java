package com.enigma.restservice.summaries;

import com.enigma.restservice.models.TypeEnum;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.math.BigDecimal;

public class TransactionSummary {

    private BigDecimal amount;

    @Enumerated(EnumType.STRING)
    private TypeEnum type;

    private long count;

    public TransactionSummary( TypeEnum type,BigDecimal amount, long count) {
        this.amount = amount;
        this.type = type;
        this.count = count;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public TypeEnum getType() {
        return type;
    }

    public void setType(TypeEnum type) {
        this.type = type;
    }

    public long getCount() {
        return count;
    }

    public void setCount(long count) {
        this.count = count;
    }
}