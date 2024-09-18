package com.moyenne.client_salaire.services;

import com.moyenne.client_salaire.entities.Client;
import com.moyenne.client_salaire.exceptions.NotFoundException;
import com.moyenne.client_salaire.repositories.ClientRepository;
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

    public Map<String, Double> calculMoyenneSalaireByProfession() {
        List<Object[]> results = clientRepository.findMoyenneSalaireByProfession();
        Map<String, Double> moyenneSalaires = new HashMap<>();
        for (Object[] result : results) {
            String profession = (String) result[0];
            Double avgSalary = (Double) result[1];
            moyenneSalaires.put(profession, avgSalary);
        }
        return moyenneSalaires;
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
            client.setNom(updatedClient.getNom());
            client.setPrenom(updatedClient.getPrenom());
            client.setAge(updatedClient.getAge());
            client.setProfession(updatedClient.getProfession());
            client.setSalaire(updatedClient.getSalaire());
            return clientRepository.save(client);
        }).orElseThrow(() -> new NotFoundException("Client not found"));
    }

    public void deleteAllClients() {
        clientRepository.deleteAll();
    }

}

