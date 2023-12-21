package com.eachados.model;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Component
@Entity
@Table(name="tipo_contato")
public class TipoContato {

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


    public TipoContato(int id, String descricao) {
        this.id = id;
        this.descricao = descricao;
    }

    public TipoContato(){}
}
