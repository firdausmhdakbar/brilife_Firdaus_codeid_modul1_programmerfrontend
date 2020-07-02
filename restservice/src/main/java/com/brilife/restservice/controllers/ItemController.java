package com.enigma.restservice.controllers;

import com.enigma.restservice.entities.Item;
import com.enigma.restservice.models.ItemModel;
import com.enigma.restservice.models.PageableList;
import com.enigma.restservice.models.ResponseMessage;
import com.enigma.restservice.services.ItemService;
import io.swagger.annotations.*;
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

@RequestMapping("/items")
@RestController
@Validated
@Api(value = "Item", description = "Controller for Item", tags = {"Item"})
public class ItemController {

    @Autowired
    private ItemService itemService;

    @PostMapping
    public ResponseMessage<ItemModel> add(@RequestBody @Valid ItemModel model) {
        Item entity = itemService.save(new Item(model.getName()));

        ModelMapper modelMapper = new ModelMapper();
        ItemModel data = modelMapper.map(entity, ItemModel.class);

        return ResponseMessage.success(data);
    }

    @PutMapping("/{id}")
    public ResponseMessage<ItemModel> edit(@PathVariable Integer id, @RequestBody @Valid ItemModel model) {

        ModelMapper modelMapper = new ModelMapper();

        model.setId(id);
        Item entity = itemService.findById(id);
        modelMapper.map(model, entity);

        entity = itemService.save(entity);

        ItemModel data = modelMapper.map(entity, ItemModel.class);
        return ResponseMessage.success(data);
    }

    @DeleteMapping("/{id}")
    public ResponseMessage<ItemModel> removeById(@PathVariable Integer id) {
        Item entity = itemService.removeById(id);
        ModelMapper modelMapper = new ModelMapper();
        ItemModel data = modelMapper.map(entity, ItemModel.class);

        return ResponseMessage.success(data);
    }

    @GetMapping("/{id}")
    public ResponseMessage<ItemModel> findById(@PathVariable Integer id) {
        Item entity = itemService.findById(id);

        ModelMapper modelMapper = new ModelMapper();
        ItemModel data = modelMapper.map(entity, ItemModel.class);
        return ResponseMessage.success(data);
    }

    @ApiOperation(value = "Find All Item", tags = {"item"})
    @ApiResponses({
            @ApiResponse(code = 200, message = "This is response", response = ResponseMessage.class)})
    @GetMapping()
    public ResponseMessage<PageableList<ItemModel>> findAll(
            @RequestParam(required = false)@ApiParam(required = true) String name,
            @RequestParam(defaultValue = "asc") String sort,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "30") int size

    ) {
        if (size > 100) {
            size = 100;
        }
        Item entity = new Item(name);
        Sort.Direction direction = Sort.Direction
                .fromOptionalString(sort.toUpperCase())
                .orElse(Sort.Direction.ASC);
        Page<Item> pageItems = itemService.findAll(entity, page, size, direction);
        List<Item> items = pageItems.toList();

        ModelMapper modelMapper = new ModelMapper();
        Type type = new TypeToken<List<ItemModel>>() {
        }.getType();
        List<ItemModel> itemModels = modelMapper.map(items, type);

        PageableList<ItemModel> data = new PageableList(itemModels,
                pageItems.getNumber(), pageItems.getSize(), pageItems.getTotalElements());
        return ResponseMessage.success(data);
    }
}
