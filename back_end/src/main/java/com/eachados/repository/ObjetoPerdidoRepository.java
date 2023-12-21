package com.eachados.repository;

import com.eachados.model.ObjetoPerdido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ObjetoPerdidoRepository extends JpaRepository<ObjetoPerdido, Integer> {

    @Query("SELECT obj FROM ObjetoPerdido obj where obj.idObjeto = 0 ")
    public List<ObjetoPerdido> findPublicos();
}