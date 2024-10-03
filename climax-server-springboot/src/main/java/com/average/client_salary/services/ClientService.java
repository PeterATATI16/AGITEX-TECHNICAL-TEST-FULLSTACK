package com.average.client_salary.services;

import com.average.client_salary.entities.Client;
import com.average.client_salary.exceptions.NotFoundException;
import com.average.client_salary.repositories.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ClientService {

    private final ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public Map<String, Double> averageSalaryByProfession() {
        List<Object[]> results = clientRepository.findAverageSalaryByProfession();
        Map<String, Double> averageSalaries = new HashMap<>();
        for (Object[] result : results) {
            String profession = (String) result[0];
            Double avgSalary = (Double) result[1];
            averageSalaries.put(profession, avgSalary);
        }
        return averageSalaries;
    }

    public List<Map<String, Object>> getStatsByProfession() {
        List<Object[]> results = clientRepository.findStatsByProfession();
        List<Map<String, Object>> stats = new ArrayList<>();

        for (Object[] result : results) {
            Map<String, Object> stat = new HashMap<>();
            stat.put("profession", result[0]);
            stat.put("totalClients", result[1]);
            stat.put("totalSalary", result[2]);
            stat.put("averageSalary", result[3]);
            stats.add(stat);
        }

        return stats;
    }

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public Client showClient(Long id) {
        return clientRepository.findById(id).orElseThrow(() -> new NotFoundException("Client not found"));
    }

    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }

    public Client updateClient(Long id, Client updatedClient) {
        return clientRepository.findById(id).map(client -> {
            client.setLastname(updatedClient.getLastname());
            client.setFirstname(updatedClient.getFirstname());
            client.setAge(updatedClient.getAge());
            client.setProfession(updatedClient.getProfession());
            client.setSalary(updatedClient.getSalary());
            return clientRepository.save(client);
        }).orElseThrow(() -> new NotFoundException("Client not found"));
    }

    public void deleteAllClients() {
        clientRepository.deleteAll();
    }

}

