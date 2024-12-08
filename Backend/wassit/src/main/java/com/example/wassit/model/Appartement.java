package com.example.wassit.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Appartement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "proprietaire_id", nullable = false)
    private Proprietaire proprietaire;

    private String ville;
    private String secteur;
    private Double prix;
    private Integer maxMembre;
    private String description;
    private String status;
    private String bonus;
    private String typelocataire;
    private String typeoffre;
    @OneToMany(mappedBy = "appartement", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Chambre> chambres;
}
