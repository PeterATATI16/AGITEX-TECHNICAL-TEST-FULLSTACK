package com.average.client_salary.services.files;

import com.average.client_salary.constants.ErrorMessages;
import com.average.client_salary.entities.Client;
import com.average.client_salary.exceptions.FileImportException;
import com.average.client_salary.repositories.ClientRepository;
import com.average.client_salary.services.FileReaderService;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStreamReader;
import java.util.List;

@Service
@Slf4j
public class CsvFileReaderService implements FileReaderService {

    private final ClientRepository clientRepository;

    public CsvFileReaderService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public void readFile(MultipartFile file) throws FileImportException {
        try (InputStreamReader reader = new InputStreamReader(file.getInputStream())) {
            CsvToBean<Client> csvToBean = new CsvToBeanBuilder<Client>(reader)
                    .withType(Client.class)
                    .withIgnoreLeadingWhiteSpace(true)
                    .build();
            List<Client> clients = csvToBean.parse();
            clientRepository.saveAll(clients);
        } catch (Exception e) {
           throw new FileImportException(ErrorMessages.FILE_IMPORT_ERROR);
        }
    }
}
