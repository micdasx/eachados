package com.eachados.controller;

import com.eachados.model.Cor;
import com.eachados.service.CorService;
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
@RequestMapping("/cor")
@CrossOrigin
public class CorController {

    @Autowired
    private CorService corService;

    @GetMapping("/all")
    @ResponseBody
    public ResponseEntity getAllColors() throws JsonProcessingException {

        List<Cor> cores = this.corService.getAll();
        return new ResponseEntity(
                cores,
                HttpStatus.OK);
    }

}
