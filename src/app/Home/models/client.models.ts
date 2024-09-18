export interface Client {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    tel: string;
    dateNaissance: Date;
    adresse: string;
    ville: string;
    codePostal: string;
    pays: string;
    dateInscription: Date;
    statutCompte: boolean;
}
  