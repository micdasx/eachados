package com.eachados.controller;

import com.eachados.model.Subcategoria;
import com.eachados.service.SubcategoriaService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subcategoria")
@CrossOrigin
public class SubcategoriaController {


    @Autowired
    private SubcategoriaService subcategoriaService;

    @GetMapping("/allfrom")
    @ResponseBody
    public ResponseEntity getSubcategoriesFromACategorie(@RequestParam int categoryId) throws JsonProcessingException {

        List<Subcategoria> subcategorias = this.subcategoriaService.getByCategoryId(categoryId);
        return new ResponseEntity(
                subcategorias,
                HttpStatus.OK);
    }
}
