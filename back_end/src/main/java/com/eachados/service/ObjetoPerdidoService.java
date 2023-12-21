package com.eachados.service;

import com.eachados.model.ObjetoPerdido;
import com.eachados.repository.ObjetoPerdidoRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.*;

import java.io.ByteArrayOutputStream;
import java.util.List;

@Service
public class ObjetoPerdidoService {

    @Autowired
    private ObjetoPerdidoRepository repository;

    @Autowired
    private ObjectMapper objectMapper;

    public ObjetoPerdido save(ObjetoPerdido objetoPerdido){
        return this.repository.save(objetoPerdido);
    }

    public List<ObjetoPerdido> getPublicos(){
        return this.repository.findPublicos();
    }
}