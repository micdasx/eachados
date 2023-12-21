package com.eachados.model;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Component
@Entity
@Table(name="subcategoria")
public class Subcategoria {

    @Getter
    @Setter
    @Id
    @NotNull
    @Column(name = "id")
    private int id;

    @Getter
    @Setter
    @NotNull
    @Column(name = "descricao")
    private String descricao;

    @NotNull
    @Column(name = "id_categoria")
    private int idCategoria;


    public Subcategoria(int id, String descricao, int idCategoria) {
        this.id = id;
        this.descricao = descricao;
        this.idCategoria = idCategoria;
    }

    public Subcategoria(){}
}
