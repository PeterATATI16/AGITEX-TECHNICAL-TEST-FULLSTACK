package com.moyenne.client_salaire.controllers;

import com.moyenne.client_salaire.constants.ApiRoutes;
import com.moyenne.client_salaire.entities.Client;
import com.moyenne.client_salaire.services.ClientService;
import com.moyenne.client_salaire.utils.FileReaderFactoryService;
import com.moyenne.client_salaire.dtos.ImportResponse;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;
import java.util.Objects;


@Slf4j
@RestController
@RequestMapping(ApiRoutes.BASE_URL)
@AllArgsConstructor
public class ClientController {

    private final ClientService clientService;
    private final FileReaderFactoryService fileReaderFactoryService;

    @PostMapping(ApiRoutes.IMPORT_FILE)
    public ResponseEntity<Void> importClientData(
            @RequestParam("file") MultipartFile file) throws Exception {
        var fileReaderService = fileReaderFactoryService.getInstance(Objects.requireNonNull(file.getOriginalFilename()));
        fileReaderService.readFile(file);
        return ResponseEntity.ok().build();
    }

    @GetMapping(ApiRoutes.MEAN_SALARIES)
    public ResponseEntity<Map<String, Double>> getAverageSalariesByProfession() {
        Map<String, Double> averageSalaries = clientService.calculMoyenneSalaireByProfession();
        return ResponseEntity.ok(averageSalaries);
    }

    @GetMapping(ApiRoutes.CLIENTS_LIST)
    public ResponseEntity<List<Client>> getClientsList() {
        List<Client> clients = clientService.getAllClients();
        return ResponseEntity.ok(clients);
    }

    @GetMapping(ApiRoutes.CLIENTS_STATS)
    public ResponseEntity<List<Map<String, Object>>> getClientsStatsByProfession() {
        List<Map<String, Object>> stats = clientService.getStatsByProfession();
        return ResponseEntity.ok(stats);
    }

    @GetMapping(ApiRoutes.SHOW_CLIENT + "/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Long id) {
        Client client = clientService.showClient(id);
        return ResponseEntity.ok(client);
    }

    @PutMapping(ApiRoutes.UPDATE_CLIENT + "/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client updatedClient) {
        Client client = clientService.updateClient(id, updatedClient);
        return ResponseEntity.ok(client);
    }

    @DeleteMapping(ApiRoutes.DELETE_CLIENT + "/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable Long id) {
        clientService.deleteClient(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping(ApiRoutes.DELETE_ALL_CLIENTS)
    public ResponseEntity<Void> deleteAllClients() {
        clientService.deleteAllClients();
        return ResponseEntity.noContent().build();
    }
}
