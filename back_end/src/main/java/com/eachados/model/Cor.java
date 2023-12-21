package com.eachados.model;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Component
@Entity
@Table(name="cor")
public class Cor {

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

    @Getter
    @Setter
    @NotNull
    @Column(name = "hexadecimal")
    private String hexadecimal;


    public Cor(int id, String descricao, String hexadecimal) {
        this.id = id;
        this.descricao = descricao;
        this.hexadecimal= hexadecimal;
    }

    public Cor() {}
}
