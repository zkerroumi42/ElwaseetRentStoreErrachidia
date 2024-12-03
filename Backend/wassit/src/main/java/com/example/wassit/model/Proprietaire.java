package com.example.wassit.model;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Data // Lombok annotation for getters, setters, and toString
@NoArgsConstructor
@AllArgsConstructor
public class Proprietaire {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String prenom;
    private String telephone;
    private Long idLocal; // Assuming id_local refers to a location ID
    private String cin;
    private String password;
    private String adresse;
}