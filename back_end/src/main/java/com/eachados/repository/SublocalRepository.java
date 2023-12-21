package com.eachados.repository;

import com.eachados.model.Subcategoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SublocalRepository extends JpaRepository<Subcategoria, Integer> {
}
