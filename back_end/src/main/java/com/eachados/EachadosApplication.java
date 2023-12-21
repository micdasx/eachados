package com.eachados;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses = EachadosApplication.class)
public class EachadosApplication {

	public static void main(String[] args) {
		SpringApplication.run(EachadosApplication.class, args);	}

}
