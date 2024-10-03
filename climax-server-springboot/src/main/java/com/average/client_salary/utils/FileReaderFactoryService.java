package com.average.client_salary.utils;

import com.average.client_salary.repositories.ClientRepository;
import com.average.client_salary.services.FileReaderService;
import com.average.client_salary.services.files.CsvFileReaderService;
import com.average.client_salary.services.files.JsonFileReaderService;
import com.average.client_salary.services.files.TxtFileReaderService;
import com.average.client_salary.services.files.XmlFileReaderService;
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
        return switch (fileExtension) {
            case ".xml" ->  new XmlFileReaderService(clientRepository);
            case ".csv" -> new CsvFileReaderService(clientRepository);
            case ".txt" -> new TxtFileReaderService(clientRepository);
            case ".json" -> new JsonFileReaderService(clientRepository);
            default -> throw new IllegalArgumentException("Invalid fileExtension: " + fileExtension);
        };
    }
}
