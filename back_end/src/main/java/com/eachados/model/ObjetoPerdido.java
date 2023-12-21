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
@Table(name="objeto_perdido")
public class ObjetoPerdido {

    @Getter
    @Setter
    @Id
    @NotNull
    @Column(name = "id_obj")
    private int idObjeto;

    @Getter
    @Setter
    @NotNull
    @Column(name = "publico")
    private Boolean publico;

    @Getter
    @Setter
    @Column(name = "imagem_s3")
    private String imagemS3;

    @Getter
    @Setter
    @NotNull
    @Column(name = "recuperado")
    private Boolean recuperado;

    public ObjetoPerdido(int idObjeto, Boolean publico, String imagemS3, Boolean recuperado) {
        this.idObjeto = idObjeto;
        this.publico = publico;
        this.imagemS3 = imagemS3;
        this.recuperado = recuperado;
    }

    public ObjetoPerdido(){}
}
