import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppartementService } from './appartement.service'; // Assurez-vous que le service est correctement importé

// Définition de l'interface Chambre
interface Chambre {
  id: number;
  description: string;
  maxMembers: number;
  prix: number;
  status: string;
  type: string;
}

// Définition de l'interface Appartement
interface Appartement {
  id: number;
  ville: string;
  secteur: string;
  prix: number;
  maxMembre: number;
  description: string;
  status: string;
  bonus: string;
  typelocataire: string;
  typeoffre: string;
  chambres: Chambre[];
}

@Component({
  selector: 'app-list-appartement',
  templateUrl: './list-appartement.component.html',
  styleUrls: ['./list-appartement.component.css']
})
export class ListAppartementComponent implements OnInit {
  // Colonnes affichées dans le tableau
  displayedColumns: string[] = ['ville', 'secteur', 'prix', 'maxMembre', 'status', 'action'];
  dataSource: MatTableDataSource<Appartement> = new MatTableDataSource<Appartement>([]);
  appartements: Appartement[] = []; // Liste des appartements récupérés
  selectedAppartement: Appartement | null = null; // Appartement sélectionné

  @ViewChild(MatSort) sort!: MatSort; // Référence pour le tri

  constructor(private appartementService: AppartementService) {}

  ngOnInit(): void {
    // Récupération des appartements à partir du service
    this.appartementService.getAppartements().subscribe(
      data => {
        console.log('Appartements récupérés :', data);
        this.appartements = data;
        this.dataSource = new MatTableDataSource<Appartement>(this.appartements);
        this.dataSource.sort = this.sort; // Assigner le tri à la source de données
      },
      error => {
        console.error('Erreur lors de la récupération des appartements :', error);
      }
    );
  }

  // Filtrage des résultats dans le tableau
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Afficher les chambres de l'appartement sélectionné
  showChambres(appartement: Appartement): void {
    this.selectedAppartement = appartement;
  }

  // Revenir à la liste des appartements
  closeChambres(): void {
    this.selectedAppartement = null;
  }
}
