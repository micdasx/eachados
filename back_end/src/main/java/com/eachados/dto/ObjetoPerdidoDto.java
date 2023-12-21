package com.eachados.dto;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

public class ObjetoPerdidoDto {

    private int idCor;
    private int idCategoria;
    private int idSubcategoria;
    private int idLocal;
    private int idSublocal;
    private int idPiso;
    private int idUsuario;
    private String descricao;
    private Boolean deletado;
    private Boolean publico;
    private Boolean recuperado;
    private String s3Image;

    public ObjetoPerdidoDto(int idCor, int idCategoria, int idSubcategoria, int idLocal, int idSublocal,
            int idPiso,
            int idUsuario, String descricao, Boolean deletado, Boolean publico, String imagemS3,
            Boolean recuperado) {

        this.idCor = idCor;
        this.idCategoria = idCategoria;
        this.idSubcategoria = idSubcategoria;
        this.idLocal = idLocal;
        this.idSublocal = idSublocal;
        this.idPiso = idPiso;
        this.idUsuario = idUsuario;
        this.descricao = descricao;
        this.deletado = deletado;
        this.publico = publico;
        this.s3Image = imagemS3;
        this.recuperado = recuperado;
    }

    public ObjetoPerdidoDto() {
    }

    public int getIdCor() {
        return idCor;
    }

    public void setIdCor(int idCor) {
        this.idCor = idCor;
    }

    public int getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(int idCategoria) {
        this.idCategoria = idCategoria;
    }

    public int getIdSubcategoria() {
        return idSubcategoria;
    }

    public void setIdSubcategoria(int idSubcategoria) {
        this.idSubcategoria = idSubcategoria;
    }

    public int getIdLocal() {
        return idLocal;
    }

    public void setIdLocal(int idLocal) {
        this.idLocal = idLocal;
    }

    public int getIdSublocal() {
        return idSublocal;
    }

    public void setIdSublocal(int idSublocal) {
        this.idSublocal = idSublocal;
    }

    public int getIdPiso() {
        return idPiso;
    }

    public void setIdPiso(int idPiso) {
        this.idPiso = idPiso;
    }

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Boolean getDeletado() {
        return deletado;
    }

    public void setDeletado(Boolean deletado) {
        this.deletado = deletado;
    }

    public Boolean getPublico() {
        return publico;
    }

    public void setPublico(Boolean publico) {
        this.publico = publico;
    }

    public String getS3Image() {
        return s3Image;
    }

    public void setS3Image(String imagemS3) {
        this.s3Image = imagemS3;
    }

    public Boolean getRecuperado() {
        return recuperado;
    }

    public void setRecuperado(Boolean recuperado) {
        this.recuperado = recuperado;
    }

}
