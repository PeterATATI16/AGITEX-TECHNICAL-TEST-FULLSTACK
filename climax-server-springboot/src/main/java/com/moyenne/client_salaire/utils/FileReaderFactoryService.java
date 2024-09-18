package com.moyenne.client_salaire.utils;

import com.moyenne.client_salaire.repositories.ClientRepository;
import com.moyenne.client_salaire.services.*;
import com.moyenne.client_salaire.services.files.CsvFileReaderService;
import com.moyenne.client_salaire.services.files.JsonFileReaderService;
import com.moyenne.client_salaire.services.files.TxtFileReaderService;
import com.moyenne.client_salaire.services.files.XmlFileReaderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class FileReaderFactoryService implements FileReaderFactoryInterface {

    private final ClientRepository clientRepository;

    public FileReaderFactoryService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public FileReaderService getInstance(String originalFileName) {
        var fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));
        log.info("extension: " + fileExtension);
        return switch (fileExtension) {
            case ".xml" ->  new XmlFileReaderService(clientRepository);
            case ".csv" -> new CsvFileReaderService(clientRepository);
            case ".txt" -> new TxtFileReaderService(clientRepository);
            case ".json" -> new JsonFileReaderService(clientRepository);
            default -> throw new IllegalArgumentException("Invalid fileExtension: " + fileExtension);
        };
    }
}
