package com.eachados.controller;

import com.eachados.model.Categoria;
import com.eachados.service.CategoriaService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/categoria")
@CrossOrigin
public class CategoriaController {

    @Autowired
    private CategoriaService service;

//    @GetMapping(path = "/all")
//    public String getAll() throws JsonProcessingException {
//       String categorias = this.service.getAllConvertedToJson();
//       return categorias;
//    }


    @GetMapping("/all")
    @ResponseBody
    public ResponseEntity getAll() throws JsonProcessingException {
        List<Categoria> categorias = this.service.getAll();
        return new ResponseEntity(
                categorias,
                HttpStatus.OK
        );
    }
}
