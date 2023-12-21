package com.eachados.model;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Component
@Entity
@Table(name="usuario")
public class Usuario {

    @Getter
    @Setter
    @Id
    @NotNull
    @Column(name = "id")
    private int id;

    @Getter
    @Setter
    @NotNull
    @Column(name = "nome")
    private String nome;

    @Getter
    @Setter
    @NotNull
    @Column(name = "nick")
    private String nick;

    @Getter
    @Setter
    @Column(name = "biografia")
    private String biografia;

    @Getter
    @Setter
    @NotNull
    @Column(name = "contato")
    private String contato;

    @Getter
    @Setter
    @NotNull
    @Column(name = "id_tipo_contato")
    private String idTipoContato;

    public Usuario(int id, String nome, String nick, String biografia, String contato, String idTipoContato) {
        this.id = id;
        this.nome = nome;
        this.nick = nick;
        this.biografia = biografia;
        this.contato = contato;
        this.idTipoContato = idTipoContato;
    }

    public Usuario(){}
}
