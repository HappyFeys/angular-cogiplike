using System;
using System.Collections.Generic;

public class Client
{
    public int Id { get; set; }
    public string Nom { get; set; }
    public string Prenom { get; set; }
    public string Email { get; set; }
    public string Tel { get; set; }
    public DateTime DateNaissance { get; set; }
    public string Adresse { get; set; }
    public string Ville { get; set; }
    public string CodePostal { get; set; }
    public string Pays { get; set; }
    public DateTime DateInscription { get; set; }
    public bool StatutCompte { get; set; }
}

public static class BDD
{
    public static List<Client> Clients = new List<Client>(){
        new Client { Id = 1, Nom = "Dupont", Prenom = "Jean", Email = "jean.dupont@example.com", Tel = "0102030405", DateNaissance = new DateTime(1980, 1, 1), Adresse = "1 Rue de Paris", Ville = "Paris", CodePostal = "75001", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 2, Nom = "Martin", Prenom = "Marie", Email = "marie.martin@example.com", Tel = "0102030406", DateNaissance = new DateTime(1985, 2, 2), Adresse = "2 Rue de Lyon", Ville = "Lyon", CodePostal = "69001", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 3, Nom = "Amand", Prenom = "Nathanael", Email = "nathanaelamd@gmail.com", Tel = "0492201522", DateNaissance = new DateTime(1999, 6, 2), Adresse = "41/3 Rue grande", Ville = "Saint-ghislain", CodePostal = "7330", Pays = "Belgique", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 4, Nom = "Dubois", Prenom = "Sophie", Email = "sophie.dubois@example.com", Tel = "0102030408", DateNaissance = new DateTime(1995, 4, 4), Adresse = "4 Rue de Bordeaux", Ville = "Bordeaux", CodePostal = "33000", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 5, Nom = "Thomas", Prenom = "Paul", Email = "paul.thomas@example.com", Tel = "0102030409", DateNaissance = new DateTime(2000, 5, 5), Adresse = "5 Rue de Lille", Ville = "Lille", CodePostal = "59000", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 6, Nom = "Petit", Prenom = "Julie", Email = "julie.petit@example.com", Tel = "0102030410", DateNaissance = new DateTime(1981, 6, 6), Adresse = "6 Rue de Nantes", Ville = "Nantes", CodePostal = "44000", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 7, Nom = "Robert", Prenom = "Pierre", Email = "pierre.robert@example.com", Tel = "0102030411", DateNaissance = new DateTime(1982, 7, 7), Adresse = "7 Rue de Strasbourg", Ville = "Strasbourg", CodePostal = "67000", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 8, Nom = "Richard", Prenom = "Laura", Email = "laura.richard@example.com", Tel = "0102030412", DateNaissance = new DateTime(1983, 8, 8), Adresse = "8 Rue de Toulouse", Ville = "Toulouse", CodePostal = "31000", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 9, Nom = "Durand", Prenom = "Jacques", Email = "jacques.durand@example.com", Tel = "0102030413", DateNaissance = new DateTime(1984, 9, 9), Adresse = "9 Rue de Nice", Ville = "Nice", CodePostal = "06000", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 10, Nom = "Leroy", Prenom = "Emma", Email = "emma.leroy@example.com", Tel = "0102030414", DateNaissance = new DateTime(1985, 10, 10), Adresse = "10 Rue de Montpellier", Ville = "Montpellier", CodePostal = "34000", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 11, Nom = "Moreau", Prenom = "Antoine", Email = "antoine.moreau@example.com", Tel = "0102030415", DateNaissance = new DateTime(1986, 11, 11), Adresse = "11 Rue de Rennes", Ville = "Rennes", CodePostal = "35000", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 12, Nom = "Simon", Prenom = "Isabelle", Email = "isabelle.simon@example.com", Tel = "0102030416", DateNaissance = new DateTime(1987, 12, 12), Adresse = "12 Rue de Reims", Ville = "Reims", CodePostal = "51100", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 13, Nom = "Laurent", Prenom = "Nicolas", Email = "nicolas.laurent@example.com", Tel = "0102030417", DateNaissance = new DateTime(1988, 1, 13), Adresse = "13 Rue de Dijon", Ville = "Dijon", CodePostal = "21000", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 14, Nom = "Lefevre", Prenom = "Chloé", Email = "chloe.lefevre@example.com", Tel = "0102030418", DateNaissance = new DateTime(1989, 2, 14), Adresse = "14 Rue de Brest", Ville = "Brest", CodePostal = "29200", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 15, Nom = "Roux", Prenom = "Alexandre", Email = "alexandre.roux@example.com", Tel = "0102030419", DateNaissance = new DateTime(1990, 3, 15), Adresse = "15 Rue de Limoges", Ville = "Limoges", CodePostal = "87000", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 16, Nom = "David", Prenom = "Camille", Email = "camille.david@example.com", Tel = "0102030420", DateNaissance = new DateTime(1991, 4, 16), Adresse = "16 Rue de Tours", Ville = "Tours", CodePostal = "37000", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 17, Nom = "Bertrand", Prenom = "Louis", Email = "louis.bertrand@example.com", Tel = "0102030421", DateNaissance = new DateTime(1992, 5, 17), Adresse = "17 Rue de Clermont-Ferrand", Ville = "Clermont-Ferrand", CodePostal = "63000", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 18, Nom = "Morel", Prenom = "Sarah", Email = "sarah.morel@example.com", Tel = "0102030422", DateNaissance = new DateTime(1993, 6, 18), Adresse = "18 Rue de Grenoble", Ville = "Grenoble", CodePostal = "38000", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 19, Nom = "Fournier", Prenom = "Lucas", Email = "lucas.fournier@example.com", Tel = "0102030423", DateNaissance = new DateTime(1994, 7, 19), Adresse = "19 Rue de Metz", Ville = "Metz", CodePostal = "57000", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true },
        new Client { Id = 20, Nom = "Girard", Prenom = "Alice", Email = "alice.girard@example.com", Tel = "0102030424", DateNaissance = new DateTime(1995, 8, 20), Adresse = "20 Rue de Nancy", Ville = "Nancy", CodePostal = "54000", Pays = "France", DateInscription = DateTime.Now, StatutCompte = true }
    };
}
