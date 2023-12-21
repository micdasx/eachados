package com.eachados.service;

import com.eachados.model.Objeto;
import com.eachados.repository.ObjetoRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.*;

import java.io.ByteArrayOutputStream;
import java.util.List;

@Service
public class ObjetoService {

    @Autowired
    private ObjetoRepository repository;

    @Autowired
    private ObjectMapper objectMapper;

    public Objeto save(Objeto objeto){
        
        return this.repository.save(objeto);
    }
}