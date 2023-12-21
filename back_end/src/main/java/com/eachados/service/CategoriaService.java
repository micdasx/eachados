package com.eachados.service;

import com.eachados.model.Categoria;
import com.eachados.repository.CategoriaRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.util.Collections;
import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository repository;

    @Autowired
    private ObjectMapper objectMapper;

    public List<Categoria> getAll(){
        return Collections.unmodifiableList(this.repository.findAll());
    }

//    public String getAllConvertedToJson() throws JsonProcessingException {
//        List<Categoria> categorias = this.getAll();
//        String categoriasJson = this.objectMapper.writeValueAsString(categorias);
//        return categoriasJson;
//    }
}
