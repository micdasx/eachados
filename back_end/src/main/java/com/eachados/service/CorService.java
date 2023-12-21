package com.eachados.service;

import com.eachados.model.Cor;
import com.eachados.repository.CorRepository;
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
public class CorService {

    @Autowired
    private CorRepository repository;

    @Autowired
    private ObjectMapper objectMapper;

    public List<Cor> getAll(){
        return Collections.unmodifiableList(this.repository.findAll());
    }
}