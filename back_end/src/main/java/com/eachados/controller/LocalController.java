package com.eachados.controller;


import com.eachados.model.Local;
import com.eachados.service.LocalService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/local")
@CrossOrigin
public class LocalController {
    @Autowired
    private LocalService service;

    @GetMapping("/all")
    @ResponseBody
    public ResponseEntity getAll() throws JsonProcessingException {
        List<Local> locais = this.service.getAll();
        return new ResponseEntity(
                locais,
                HttpStatus.OK
        );
    }
}
