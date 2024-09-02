package com.moyenne.client_salaire.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.moyenne.client_salaire.entities.Client;
import com.moyenne.client_salaire.repositories.ClientRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@Slf4j
public class JsonFileReaderService implements FileReaderService {
    private final ClientRepository clientRepository;

    public JsonFileReaderService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public void readFile(MultipartFile file) throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        List<Client> clients = objectMapper.readValue(file.getInputStream(), objectMapper.getTypeFactory().constructCollectionType(List.class, Client.class));
        clientRepository.saveAll(clients);
    }
}
