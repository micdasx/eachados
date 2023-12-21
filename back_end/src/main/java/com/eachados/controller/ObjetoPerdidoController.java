package com.eachados.controller;

import com.eachados.dto.ObjetoPerdidoDto;
import com.eachados.model.Subcategoria;
import com.eachados.model.Cor;
import com.eachados.model.Piso;
import com.eachados.model.ObjetoPerdido;
import com.eachados.model.Objeto;
import com.eachados.service.SubcategoriaService;
import com.eachados.util.S3Util;
import com.eachados.service.CorService;
import com.eachados.service.PisoService;
import com.eachados.service.ObjetoPerdidoService;
import com.eachados.service.ObjetoService;
import com.fasterxml.jackson.core.JsonProcessingException;

import org.apache.coyote.http11.filters.BufferedInputFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.InputStream;
import java.util.Base64;
import java.util.List;

import javax.imageio.stream.ImageInputStream;
import javax.websocket.Decoder.Text;

@RequestMapping("/objetoperdido")
@Controller
@CrossOrigin
public class ObjetoPerdidoController {

    static final String AWS_S3_URL = "";
    @Autowired
    private ObjetoPerdidoService objetoPerdidoService;
    @Autowired
    private ObjetoService objetoService;


    @PostMapping(path = "/new", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<ObjetoPerdido> createObjetoPerdido(@RequestBody ObjetoPerdidoDto newObjetoDto)
            throws JsonProcessingException {

        //Send image to s3
        byte[] decodedImage = Base64.getDecoder().decode(newObjetoDto.getS3Image());
        InputStream imageInputStream = new ByteArrayInputStream(decodedImage);

        ResponseEntity<ObjetoPerdido> response = null;

        try{

            Objeto newObjeto = new Objeto(newObjetoDto.getIdCor(), newObjetoDto.getIdCategoria(), newObjetoDto.getIdSubcategoria(), newObjetoDto.getIdLocal(),
             newObjetoDto.getIdSublocal(), newObjetoDto.getIdPiso(), newObjetoDto.getIdUsuario(), newObjetoDto.getDescricao(), newObjetoDto.getDeletado());
    
            this.objetoService.save(newObjeto);

            String fileExtension = ".png";
            String s3ImagePath = Integer.toString(newObjeto.getId()) + fileExtension;

            sendImageToS3(imageInputStream, s3ImagePath);

            ObjetoPerdido newObjetoPerdido = new ObjetoPerdido(newObjeto.getId(), newObjetoDto.getPublico(), s3ImagePath, newObjetoDto.getRecuperado());

            ObjetoPerdido objetoPerdido = this.objetoPerdidoService.save(newObjetoPerdido);

            response = new ResponseEntity<ObjetoPerdido>(objetoPerdido, HttpStatus.CREATED);
        }catch(Exception e){


            response = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return response;
    }

    //return true if the image was sent successfully
    private void sendImageToS3(InputStream image, String fileName) throws Exception{

        try{

            S3Util.UploadFile(fileName, image);
        }catch(Exception ex){

            System.console().writer().println(ex.getMessage());
        }
    }

    @GetMapping(path = "/mural")
    public ResponseEntity createObjetoPerdido() {
        List<ObjetoPerdido> objts = this.objetoPerdidoService.getPublicos();
        return new ResponseEntity(
                objts,
                HttpStatus.OK);
    }
}
