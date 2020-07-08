package com.brilife.restservice.services.impl;

import com.brilife.restservice.entities.PemakaiKontrasepsi;
import com.brilife.restservice.exceptions.EntityNotFoundException;
import com.brilife.restservice.repositories.PemakaiKontrasepsiRepository;
import com.brilife.restservice.services.PemakaiKontrasepsiService;
import com.brilife.restservice.summaries.PemakaiKontrasepsiSummary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PemakaiKontrasepsiServiceImpl implements PemakaiKontrasepsiService {

    @Autowired
    private PemakaiKontrasepsiRepository repository;

    @Override
    public PemakaiKontrasepsi save(PemakaiKontrasepsi entity) {
        return repository.save(entity);
    }

    @Override
    public PemakaiKontrasepsi removeById(Integer id) {
        PemakaiKontrasepsi entity = findById(id);
        repository.delete(entity);

        return entity;
    }

    @Override
    public PemakaiKontrasepsi findById(Integer id) {
        return repository.findById(id).orElseThrow(() -> {
            return new EntityNotFoundException();
        });
    }


    @Override
    public Page<PemakaiKontrasepsi> findAll(PemakaiKontrasepsi entity, int page, int size, Sort.Direction direction) {
        Sort s = Sort.Direction.DESC.equals(direction) ? Sort.by(direction, "id").descending() : Sort.by("id");

        ExampleMatcher matcher = ExampleMatcher.matchingAll()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);
        return repository.findAll(Example.of(entity, matcher), PageRequest.of(page, size, s));
    }

    @Override
    public List<PemakaiKontrasepsiSummary> listSummaryPemakaiKontrasepsi() {
        return repository.listSummaryPemakaiKontrasepsi();
    }
}
