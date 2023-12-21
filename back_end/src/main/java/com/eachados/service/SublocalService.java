package com.eachados.service;

import com.eachados.model.Local;
import com.eachados.model.Piso;
import com.eachados.repository.LocalRepository;
import com.eachados.repository.PisoRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class SublocalService {

    @Autowired
    private LocalRepository repository;

    @Autowired
    private ObjectMapper objectMapper;

    public List<Local> getAll(){
        return Collections.unmodifiableList(this.repository.findAll());
    }

}
