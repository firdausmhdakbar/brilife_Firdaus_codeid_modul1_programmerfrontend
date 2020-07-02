package com.brilife.restservice.services.impl;

import com.brilife.restservice.entities.Propinsi;
import com.brilife.restservice.exceptions.EntityNotFoundException;
import com.brilife.restservice.repositories.PropinsiRepository;
import com.brilife.restservice.services.PropinsiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;


@Service
public class PropinsiServiceImpl implements PropinsiService {

    @Autowired
    private PropinsiRepository repository;

    @Override
    public Propinsi save(Propinsi entity) {
        return repository.save(entity);
    }

    @Override
    public Propinsi removeById(Integer id) {
        Propinsi entity = findById(id);
        repository.delete(entity);
        return entity;
    }

    @Override
    public Propinsi findById(Integer id) {
        return repository.findById(id).orElseThrow(() -> {
            return new EntityNotFoundException();
        });
    }

    @Override
    public Page<Propinsi> findAll(Propinsi entity, int page, int size, Sort.Direction direction) {
        Sort s = Sort.Direction.DESC.equals(direction) ? Sort.by(direction, "id").descending() : Sort.by("id");

        ExampleMatcher matcher = ExampleMatcher.matchingAll()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);
        return repository.findAll(Example.of(entity, matcher), PageRequest.of(page, size, s));
    }
}
