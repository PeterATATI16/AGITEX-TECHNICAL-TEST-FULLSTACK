package com.moyenne.client_salaire.services;

import com.moyenne.client_salaire.entities.Client;
import com.moyenne.client_salaire.exceptions.FileImportException;
import com.moyenne.client_salaire.repositories.ClientRepository;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;

@Service
@Slf4j
public class TxtFileReaderService implements FileReaderService {
    private final ClientRepository clientRepository;

    public TxtFileReaderService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public void readFile(MultipartFile file) throws FileImportException {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] fields = line.split(", ");
                Client client = new Client();
                client.setNom(fields[0]);
                client.setPrenom(fields[1]);
                client.setAge(Integer.parseInt(fields[2]));
                client.setProfession(fields[3]);
                client.setSalaire(Double.parseDouble(fields[4].replace(" K€", "")));
                clientRepository.save(client);
            }
        } catch (IOException e) {
            throw new FileImportException("une erreur est survenue l'ors de l'import du fichier");
        }
    }
}
