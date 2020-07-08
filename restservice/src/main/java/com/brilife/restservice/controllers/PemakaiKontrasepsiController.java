package com.brilife.restservice.controllers;

import com.brilife.restservice.entities.Propinsi;
import com.brilife.restservice.entities.PemakaiKontrasepsi;
import com.brilife.restservice.entities.Kontrasepsi;
import com.brilife.restservice.models.PageableList;
import com.brilife.restservice.models.ResponseMessage;
import com.brilife.restservice.models.PemakaiKontrasepsiModel;
import com.brilife.restservice.services.KontrasepsiService;
import com.brilife.restservice.services.PemakaiKontrasepsiService;
import com.brilife.restservice.services.PropinsiService;
import com.brilife.restservice.summaries.PemakaiKontrasepsiSummary;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.lang.reflect.Type;
import java.util.List;

@RequestMapping("/pemakaikontrasepsi")
@RestController
@Validated
public class PemakaiKontrasepsiController {

    @Autowired
    private PropinsiService propinsiService;

    @Autowired
    private KontrasepsiService kontrasepsiService;

    @Autowired
    private PemakaiKontrasepsiService pemakaiKontrasepsiService;

    @PostMapping
    public ResponseMessage<PemakaiKontrasepsiModel> add(@RequestBody @Valid PemakaiKontrasepsiModel model) {
        Propinsi propinsi = propinsiService.findById(model.getPropinsi().getId());
        Kontrasepsi kontrasepsi = kontrasepsiService.findById(model.getKontrasepsi().getId());
        PemakaiKontrasepsi entity = pemakaiKontrasepsiService.save(new PemakaiKontrasepsi(propinsi, model.getJumlahPemakai(), kontrasepsi));

        ModelMapper modelMapper = new ModelMapper();
        PemakaiKontrasepsiModel data = modelMapper.map(entity, PemakaiKontrasepsiModel.class);

        return ResponseMessage.success(data);
    }

    @PutMapping("/{id}")
    public ResponseMessage<PemakaiKontrasepsiModel> edit(@PathVariable Integer id, @RequestBody @Valid PemakaiKontrasepsiModel model) {

        ModelMapper modelMapper = new ModelMapper();

        model.setId(id);
        PemakaiKontrasepsi entity = pemakaiKontrasepsiService.findById(id);
        modelMapper.map(model, entity);

        entity = (PemakaiKontrasepsi) pemakaiKontrasepsiService.save(entity);

        PemakaiKontrasepsiModel data = modelMapper.map(entity, PemakaiKontrasepsiModel.class);
        return ResponseMessage.success(data);
    }

    @DeleteMapping("/{id}")
    public ResponseMessage<PemakaiKontrasepsiModel> removeById(@PathVariable Integer id) {
        PemakaiKontrasepsi entity = pemakaiKontrasepsiService.removeById(id);
        ModelMapper modelMapper = new ModelMapper();
        PemakaiKontrasepsiModel data = modelMapper.map(entity, PemakaiKontrasepsiModel.class);

        return ResponseMessage.success(data);
    }

    @GetMapping("/{id}")
    public ResponseMessage<PemakaiKontrasepsiModel> findById(@PathVariable Integer id) {
        PemakaiKontrasepsi entity = pemakaiKontrasepsiService.findById(id);

        ModelMapper modelMapper = new ModelMapper();
        PemakaiKontrasepsiModel data = modelMapper.map(entity, PemakaiKontrasepsiModel.class);
        return ResponseMessage.success(data);
    }

    @GetMapping()
    public ResponseMessage<PageableList<PemakaiKontrasepsiModel>> findAll(
            @RequestParam(required = false) Propinsi propinsi,
            @RequestParam(required = false) Integer jumlahPemakai,
            @RequestParam(required = false) Kontrasepsi kontrasepsi,
            @RequestParam(defaultValue = "asc") String sort,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "30") int size

    ) {
        if (size > 100) {
            size = 100;
        }
        PemakaiKontrasepsi entity = new PemakaiKontrasepsi(propinsi, jumlahPemakai, kontrasepsi);
        Sort.Direction direction = Sort.Direction
                .fromOptionalString(sort.toUpperCase())
                .orElse(Sort.Direction.ASC);
        Page<PemakaiKontrasepsi> pageStocks = pemakaiKontrasepsiService.findAll(entity, page, size, direction);
        List<PemakaiKontrasepsi> stocks = pageStocks.toList();

        ModelMapper modelMapper = new ModelMapper();
        Type types = new TypeToken<List<PemakaiKontrasepsiModel>>() {
        }.getType();
        List<PemakaiKontrasepsiModel> stockModels = modelMapper.map(stocks, types);

        PageableList<PemakaiKontrasepsiModel> data = new PageableList(stockModels,
                pageStocks.getNumber(), pageStocks.getSize(), pageStocks.getTotalElements());
        return ResponseMessage.success(data);
    }

    @GetMapping(path = "/summary")
    public ResponseMessage<List<PemakaiKontrasepsiSummary>>listSummary() {
        List<PemakaiKontrasepsiSummary> pemakaiKontrasepsiSummaries = pemakaiKontrasepsiService.listSummaryPemakaiKontrasepsi();

        return ResponseMessage.success(pemakaiKontrasepsiSummaries);
    }
}
