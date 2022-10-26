/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.sj.Security.Dto;

import javax.validation.constraints.NotBlank;
import lombok.Getter;
@Getter
public class LoginUsuario {
   @NotBlank
   private String nombreUsuario;
   @NotBlank
   private String password;
   
   //Getter y Setter

    public LoginUsuario(String nombreUsuario, String password) {
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
   
}
