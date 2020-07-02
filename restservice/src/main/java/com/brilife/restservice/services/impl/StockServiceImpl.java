package com.enigma.restservice.services.impl;

import com.enigma.restservice.entities.Stock;
import com.enigma.restservice.exceptions.EntityNotFoundException;
import com.enigma.restservice.repositories.StockRepository;
import com.enigma.restservice.services.StockService;
import com.enigma.restservice.summaries.StockSummary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Transactional()
@Service

public class StockServiceImpl implements StockService {

    @Autowired
    private StockRepository repository;

    @Override
    public Stock save(Stock entity) {
        return repository.save(entity);
    }

    @Override
    public Stock removeById(Integer id) {
        Stock entity = findById(id);
        repository.delete(entity);

        return entity;
    }

    @Override
    public Stock findById(Integer id) {
        return repository.findById(id).orElseThrow(() -> {
            return new EntityNotFoundException();
        });
    }

    @Override
    public Page<Stock> findAll(Stock entity, int page, int size, Sort.Direction direction) {
        Sort s = Sort.Direction.DESC.equals(direction) ? Sort.by(direction, "id").descending() : Sort.by("id");

        ExampleMatcher matcher = ExampleMatcher.matchingAll()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);
        return repository.findAll(Example.of(entity, matcher), PageRequest.of(page, size, s));
    }

    @Override
    public List<StockSummary> listSummaryStock() {
        return repository.listSummaryStock();
    }
}
