package com.moyenne.client_salaire.controllers;

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
@RequestMapping("/api/clients")
@AllArgsConstructor
public class ClientController {

    private final ClientService clientService;
    private final FileReaderFactoryService fileReaderFactoryService;

    @PostMapping("/import-file")
    public ResponseEntity<ImportResponse> importClientData(
            @RequestParam("file") MultipartFile file) throws Exception {
        var fileReaderService = fileReaderFactoryService.getInstance(Objects.requireNonNull(file.getOriginalFilename()));
        fileReaderService.readFile(file);
        getClientsList();
        return ResponseEntity.ok().build();
    }

    @GetMapping("/mean-salaries")
    public ResponseEntity<Map<String, Double>> getAverageSalariesByProfession() {
        Map<String, Double> averageSalaries = clientService.calculMoyenneSalaireByProfession();
        return ResponseEntity.ok(averageSalaries);
    }

    @GetMapping("/clients-list")
    public ResponseEntity<List<Client>> getClientsList() {
        List<Client> clients = clientService.getAllClients();
        return ResponseEntity.ok(clients);
    }

    @GetMapping("/clients-stats")
    public ResponseEntity<List<Map<String, Object>>> getClientsStatsByProfession() {
        List<Map<String, Object>> stats = clientService.getStatsByProfession();
        return ResponseEntity.ok(stats);
    }
}
