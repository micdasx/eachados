package com.eachados.service;

import com.eachados.model.Piso;
import com.eachados.repository.PisoRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.*;

import java.io.ByteArrayOutputStream;
import java.util.Collections;
import java.util.List;

@Service
public class PisoService {

    @Autowired
    private PisoRepository repository;

    @Autowired
    private ObjectMapper objectMapper;

    public List<Piso> getAll(){
        return Collections.unmodifiableList(this.repository.findAll());
    }
}