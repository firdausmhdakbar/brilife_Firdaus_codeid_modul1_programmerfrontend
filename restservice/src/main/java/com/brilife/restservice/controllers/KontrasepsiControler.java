package com.brilife.restservice.controllers;

import com.brilife.restservice.entities.Kontrasepsi;
import com.brilife.restservice.models.KontrasepsiModel;
import com.brilife.restservice.models.PageableList;
import com.brilife.restservice.models.ResponseMessage;
import com.brilife.restservice.services.KontrasepsiService;
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

@RequestMapping("/kontrasepsi")
@RestController
@Validated
@Api(value = "kontrasepsi", description = "Controller for kontrasepsi", tags = {"kontrasepsi"})

public class KontrasepsiControler {

    @Autowired
    private KontrasepsiService kontrasepsiService;

    @PostMapping
    public ResponseMessage<KontrasepsiModel> add(@RequestBody @Valid KontrasepsiModel model) {
        Kontrasepsi entity = kontrasepsiService.save(new Kontrasepsi(model.getName()));

        ModelMapper modelMapper = new ModelMapper();
        KontrasepsiModel data = modelMapper.map(entity, KontrasepsiModel.class);

        return ResponseMessage.success(data);
    }

    @PutMapping("/{id}")
    public ResponseMessage<KontrasepsiModel> edit(@PathVariable Integer id, @RequestBody @Valid KontrasepsiModel model) {

        ModelMapper modelMapper = new ModelMapper();

        model.setId(id);
        Kontrasepsi entity = kontrasepsiService.findById(id);
        modelMapper.map(model, entity);

        entity = kontrasepsiService.save(entity);

        KontrasepsiModel data = modelMapper.map(entity, KontrasepsiModel.class);
        return ResponseMessage.success(data);
    }

    @DeleteMapping("/{id}")
    public ResponseMessage<KontrasepsiModel> removeById(@PathVariable Integer id) {
        Kontrasepsi entity = kontrasepsiService.removeById(id);
        ModelMapper modelMapper = new ModelMapper();
        KontrasepsiModel data = modelMapper.map(entity, KontrasepsiModel.class);

        return ResponseMessage.success(data);
    }

    @GetMapping("/{id}")
    public ResponseMessage<KontrasepsiModel> findById(@PathVariable Integer id) {
        Kontrasepsi entity = kontrasepsiService.findById(id);

        ModelMapper modelMapper = new ModelMapper();
        KontrasepsiModel data = modelMapper.map(entity, KontrasepsiModel.class);
        return ResponseMessage.success(data);
    }

    @ApiOperation(value = "Find All kontrasepsi", tags = {"propinsi"})
    @ApiResponses({
            @ApiResponse(code = 200, message = "This is response", response = ResponseMessage.class)})
    @GetMapping()
    public ResponseMessage<PageableList<KontrasepsiModel>> findAll(
            @RequestParam(required = false)@ApiParam(required = true) String name,
            @RequestParam(defaultValue = "asc") String sort,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "30") int size

    ) {
        if (size > 100) {
            size = 100;
        }
        Kontrasepsi entity = new Kontrasepsi(name);
        Sort.Direction direction = Sort.Direction
                .fromOptionalString(sort.toUpperCase())
                .orElse(Sort.Direction.ASC);
        Page<Kontrasepsi> pageItems = kontrasepsiService.findAll(entity, page, size, direction);
        List<Kontrasepsi> items = pageItems.toList();

        ModelMapper modelMapper = new ModelMapper();
        Type type = new TypeToken<List<KontrasepsiModel>>() {
        }.getType();
        List<KontrasepsiModel> itemModels = modelMapper.map(items, type);

        PageableList<KontrasepsiModel> data = new PageableList(itemModels,
                pageItems.getNumber(), pageItems.getSize(), pageItems.getTotalElements());
        return ResponseMessage.success(data);
    }
}
