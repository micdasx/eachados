package com.eachados.model;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Component
@Entity
@Table(name="objeto")
public class Objeto {

    @Getter
    @Setter
    @Id
    @NotNull
    @Column(name = "id")
    private int id;


    @Getter
    @Setter
    @NotNull
    @Column(name = "id_cor")
    private int idCor;

    @Getter
    @Setter
    @NotNull
    @Column(name = "id_categoria")
    private int idCategoria;

    @Getter
    @Setter
    @NotNull
    @Column(name = "id_subcategoria")
    private int idSubcategoria;

    @Getter
    @Setter
    @NotNull
    @Column(name = "id_local")
    private int idLocal;

    @Getter
    @Setter
    @NotNull
    @Column(name = "id_sublocal")
    private int idSublocal;

    @Getter
    @Setter
    @NotNull
    @Column(name = "id_piso")
    private int idPiso;

    @Getter
    @Setter
    @NotNull
    @Column(name = "id_usuario")
    private int idUsuario;

    @Getter
    @Setter
    @Column(name = "descricao")
    private String descricao;

    @Getter
    @Setter
    @NotNull
    @Column(name = "deletado")
    private Boolean deletado;

    public Objeto(int idCor, int idCategoria, int idSubcategoria, int idLocal, int idSublocal, int idPiso,
                  int idUsuario, String descricao, Boolean deletado) {
        this.idCor = idCor;
        this.idCategoria = idCategoria;
        this.idSubcategoria = idSubcategoria;
        this.idLocal = idLocal;
        this.idSublocal = idSublocal;
        this.idPiso = idPiso;
        this.idUsuario = idUsuario;
        this.descricao = descricao;
        this.deletado = deletado;
    }

    public Objeto(){}
}
