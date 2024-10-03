package com.average.client_salary.repositories;

import com.average.client_salary.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClientRepository extends JpaRepository<Client, Long> {
    @Query("SELECT c.profession, AVG(c.salary) FROM Client c GROUP BY c.profession")
    List<Object[]> findAverageSalaryByProfession();

    @Query("SELECT c.profession, COUNT(c), SUM(c.salary), AVG(c.salary) FROM Client c GROUP BY c.profession")
    List<Object[]> findStatsByProfession();
}