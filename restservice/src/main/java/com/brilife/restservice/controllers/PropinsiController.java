package com.brilife.restservice.controllers;

import com.brilife.restservice.entities.Propinsi;
import com.brilife.restservice.models.PropinsiModel;
import com.brilife.restservice.models.PageableList;
import com.brilife.restservice.models.ResponseMessage;
import com.brilife.restservice.services.PropinsiService;
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

@RequestMapping("/propinsi")
@RestController
@Validated
@Api(value = "propinsi", description = "Controller for propinsi", tags = {"propinsi"})
public class PropinsiController {

    @Autowired
    private PropinsiService propinsiService;

    @PostMapping
    public ResponseMessage<PropinsiModel> add(@RequestBody @Valid PropinsiModel model) {
        Propinsi entity = propinsiService.save(new Propinsi(model.getNamaPropinsi()));

        ModelMapper modelMapper = new ModelMapper();
        PropinsiModel data = modelMapper.map(entity, PropinsiModel.class);

        return ResponseMessage.success(data);
    }

    @PutMapping("/{id}")
    public ResponseMessage<PropinsiModel> edit(@PathVariable Integer id, @RequestBody @Valid PropinsiModel model) {

        ModelMapper modelMapper = new ModelMapper();

        model.setId(id);
        Propinsi entity = propinsiService.findById(id);
        modelMapper.map(model, entity);

        entity = propinsiService.save(entity);

        PropinsiModel data = modelMapper.map(entity, PropinsiModel.class);
        return ResponseMessage.success(data);
    }

    @DeleteMapping("/{id}")
    public ResponseMessage<PropinsiModel> removeById(@PathVariable Integer id) {
        Propinsi entity = propinsiService.removeById(id);
        ModelMapper modelMapper = new ModelMapper();
        PropinsiModel data = modelMapper.map(entity, PropinsiModel.class);

        return ResponseMessage.success(data);
    }

    @GetMapping("/{id}")
    public ResponseMessage<PropinsiModel> findById(@PathVariable Integer id) {
        Propinsi entity = propinsiService.findById(id);

        ModelMapper modelMapper = new ModelMapper();
        PropinsiModel data = modelMapper.map(entity, PropinsiModel.class);
        return ResponseMessage.success(data);
    }

    @ApiOperation(value = "Find All propinsi", tags = {"item"})
    @ApiResponses({
            @ApiResponse(code = 200, message = "This is response", response = ResponseMessage.class)})
    @GetMapping()
    public ResponseMessage<PageableList<PropinsiModel>> findAll(
            @RequestParam(required = false)@ApiParam(required = true) String name,
            @RequestParam(defaultValue = "asc") String sort,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "30") int size

    ) {
        if (size > 100) {
            size = 100;
        }
        Propinsi entity = new Propinsi(name);
        Sort.Direction direction = Sort.Direction
                .fromOptionalString(sort.toUpperCase())
                .orElse(Sort.Direction.ASC);
        Page<Propinsi> pageItems = propinsiService.findAll(entity, page, size, direction);
        List<Propinsi> items = pageItems.toList();

        ModelMapper modelMapper = new ModelMapper();
        Type type = new TypeToken<List<PropinsiModel>>() {
        }.getType();
        List<PropinsiModel> itemModels = modelMapper.map(items, type);

        PageableList<PropinsiModel> data = new PageableList(itemModels,
                pageItems.getNumber(), pageItems.getSize(), pageItems.getTotalElements());
        return ResponseMessage.success(data);
    }
}
