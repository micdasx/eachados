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
@Table(name="objeto_achado")
public class ObjetoAchado {

    @Getter
    @Setter
    @Id
    @NotNull
    @Column(name = "id_obj")
    private int idObjeto;

    @Getter
    @Setter
    @NotNull
    @Column(name = "devolvido")
    private Boolean devolvido;

    public ObjetoAchado(int idObjeto, Boolean devolvido) {
        this.idObjeto = idObjeto;
        this.devolvido = devolvido;
    }

    public ObjetoAchado(){}
}
