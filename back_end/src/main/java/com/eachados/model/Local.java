package com.eachados.model;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Component
@Entity
@Table(name="local")
public class Local {

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


    public Local(int id, String descricao) {
        this.id = id;
        this.descricao = descricao;
    }

    public Local(){}
}
