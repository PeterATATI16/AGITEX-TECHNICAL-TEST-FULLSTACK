package com.average.client_salary.services.files;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.average.client_salary.entities.Client;
import com.average.client_salary.repositories.ClientRepository;
import com.average.client_salary.services.FileReaderService;
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
