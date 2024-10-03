package com.average.client_salary.services.files;

import com.average.client_salary.constants.ErrorMessages;
import com.average.client_salary.entities.Client;
import com.average.client_salary.exceptions.FileImportException;
import com.average.client_salary.repositories.ClientRepository;
import com.average.client_salary.services.FileReaderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

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
                client.setLastname(fields[0]);
                client.setFirstname(fields[1]);
                client.setAge(Integer.parseInt(fields[2]));
                client.setProfession(fields[3]);
                client.setSalary(Double.parseDouble(fields[4].replace(" K€", "")));
                clientRepository.save(client);
            }
        } catch (IOException e) {
            throw new FileImportException(ErrorMessages.FILE_IMPORT_ERROR);
        }
    }
}
