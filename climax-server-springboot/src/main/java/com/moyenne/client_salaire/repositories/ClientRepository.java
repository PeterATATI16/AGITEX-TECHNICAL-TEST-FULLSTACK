package com.moyenne.client_salaire.repositories;

import com.moyenne.client_salaire.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClientRepository extends JpaRepository<Client, Long> {
    @Query("SELECT c.profession, AVG(c.salaire) FROM Client c GROUP BY c.profession")
    List<Object[]> findMoyenneSalaireByProfession();

    @Query("SELECT c.profession, COUNT(c), SUM(c.salaire), AVG(c.salaire) FROM Client c GROUP BY c.profession")
    List<Object[]> findStatsByProfession();
}