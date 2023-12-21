package com.eachados.controller;

import com.eachados.model.Piso;
import com.eachados.service.PisoService;
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
@RequestMapping("/piso")
@CrossOrigin
public class PisoController {

    @Autowired
    private PisoService pisoService;

    @GetMapping("/all")
    @ResponseBody
    public ResponseEntity getAllPisos() throws JsonProcessingException {

        List<Piso> pisos = this.pisoService.getAll();
        return new ResponseEntity(
                pisos,
                HttpStatus.OK);
    }
}
