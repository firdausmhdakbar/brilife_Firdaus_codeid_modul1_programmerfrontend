package com.enigma.restservice.controllers;

import com.enigma.restservice.entities.Item;
import com.enigma.restservice.entities.Stock;
import com.enigma.restservice.entities.Unit;
import com.enigma.restservice.models.PageableList;
import com.enigma.restservice.models.ResponseMessage;
import com.enigma.restservice.models.StockModel;
import com.enigma.restservice.services.StockService;
import com.enigma.restservice.summaries.StockSummary;
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

@RequestMapping("/stocks")
@RestController
@Validated
public class StockController {

    @Autowired
    private StockService stockService;

    @PostMapping
    public ResponseMessage<StockModel> add(@RequestBody @Valid StockModel model) {
        Stock entity = stockService.save(new Stock(model.getItem(), model.getQuantity(), model.getUnit()));

        ModelMapper modelMapper = new ModelMapper();
        StockModel data = modelMapper.map(entity, StockModel.class);

        return ResponseMessage.success(data);
    }

    @PutMapping("/{id}")
    public ResponseMessage<StockModel> edit(@PathVariable Integer id, @RequestBody @Valid StockModel model) {

        ModelMapper modelMapper = new ModelMapper();

        model.setId(id);
        Stock entity = stockService.findById(id);
        modelMapper.map(model, entity);

        entity = stockService.save(entity);

        StockModel data = modelMapper.map(entity, StockModel.class);
        return ResponseMessage.success(data);
    }

    @DeleteMapping("/{id}")
    public ResponseMessage<StockModel> removeById(@PathVariable Integer id) {
        Stock entity = stockService.removeById(id);
        ModelMapper modelMapper = new ModelMapper();
        StockModel data = modelMapper.map(entity, StockModel.class);

        return ResponseMessage.success(data);
    }

    @GetMapping("/{id}")
    public ResponseMessage<StockModel> findById(@PathVariable Integer id) {
        Stock entity = stockService.findById(id);

        ModelMapper modelMapper = new ModelMapper();
        StockModel data = modelMapper.map(entity, StockModel.class);
        return ResponseMessage.success(data);
    }

    @GetMapping()
    public ResponseMessage<PageableList<StockModel>> findAll(
            @RequestParam(required = false) Item item,
            @RequestParam(required = false) Integer quantity,
            @RequestParam(required = false) Unit unit,
            @RequestParam(defaultValue = "asc") String sort,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size

    ) {
        if (size > 100) {
            size = 100;
        }
        Stock entity = new Stock(item, quantity, unit);
        Sort.Direction direction = Sort.Direction
                .fromOptionalString(sort.toUpperCase())
                .orElse(Sort.Direction.ASC);
        Page<Stock> pageStocks = stockService.findAll(entity, page, size, direction);
        List<Stock> stocks = pageStocks.toList();

        ModelMapper modelMapper = new ModelMapper();
        Type types = new TypeToken<List<StockModel>>() {
        }.getType();
        List<StockModel> stockModels = modelMapper.map(stocks, types);

        PageableList<StockModel> data = new PageableList(stockModels,
                pageStocks.getNumber(), pageStocks.getSize(), pageStocks.getTotalElements());
        return ResponseMessage.success(data);
    }

    @GetMapping(path = "/summary")
    public ResponseMessage<List<StockSummary>>listSummary() {
        List<StockSummary> stockSummaries = stockService.listSummaryStock();

        return ResponseMessage.success(stockSummaries);
    }
}
