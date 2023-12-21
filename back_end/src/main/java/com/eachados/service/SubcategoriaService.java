package com.eachados.service;

import com.eachados.model.Subcategoria;
import com.eachados.repository.SubcategoriaRepository;
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
public class SubcategoriaService {

    @Autowired
    private SubcategoriaRepository repository;

    @Autowired
    private ObjectMapper objectMapper;

    public List<Subcategoria> getByCategoryId(int categoryId){

        ExampleMatcher exampleMatcher = ExampleMatcher.matchingAll()
                                               .withIgnorePaths(new String[]{"id", "descricao"});
        Subcategoria subcategoriaExample = new Subcategoria(1, ".*", categoryId);
        Example<Subcategoria> example = Example.of(subcategoriaExample);
        return Collections.unmodifiableList(this.repository.findAll(example));
    }

}