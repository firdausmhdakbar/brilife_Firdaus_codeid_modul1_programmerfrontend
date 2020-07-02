package com.enigma.restservice.services;

import com.enigma.restservice.entities.Stock;
import com.enigma.restservice.summaries.StockSummary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface StockService {

    public Stock save(Stock entity);

    public Stock removeById(Integer id);

    public Stock findById(Integer id);

    public Page<Stock> findAll(Stock entity, int page, int size, Sort.Direction direction);

    public List<StockSummary> listSummaryStock();
}
