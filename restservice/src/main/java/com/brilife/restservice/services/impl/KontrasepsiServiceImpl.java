package com.brilife.restservice.services.impl;

import com.brilife.restservice.entities.Kontrasepsi;
import com.brilife.restservice.exceptions.EntityNotFoundException;
import com.brilife.restservice.repositories.KontrasepsiRepository;
import com.brilife.restservice.services.KontrasepsiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;


@Service

public class KontrasepsiServiceImpl implements KontrasepsiService {

    @Autowired
    private KontrasepsiRepository repository;

    @Override
    public Kontrasepsi save(Kontrasepsi entity) {
        return repository.save(entity);
    }

    @Override
    public Kontrasepsi removeById(Integer id) {
        Kontrasepsi entity = findById(id);
        repository.delete(entity);
        return entity;
    }

    @Override
    public Kontrasepsi findById(Integer id) {
        return repository.findById(id).orElseThrow(() -> {
            return new EntityNotFoundException();
        });
    }

    @Override
    public Page<Kontrasepsi> findAll(Kontrasepsi entity, int page, int size, Sort.Direction direction) {
        Sort s = Sort.Direction.DESC.equals(direction) ? Sort.by(direction, "id").descending() : Sort.by("id");

        ExampleMatcher matcher = ExampleMatcher.matchingAll()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);
        return repository.findAll(Example.of(entity, matcher), PageRequest.of(page, size, s));
    }
}
