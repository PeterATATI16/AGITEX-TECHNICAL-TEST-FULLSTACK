package com.average.client_salary;

import com.average.client_salary.repositories.ClientRepository;
import com.average.client_salary.services.files.CsvFileReaderService;
import com.average.client_salary.services.FileReaderService;
import com.average.client_salary.utils.FileReaderFactoryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(MockitoExtension.class)
class FileReaderFactoryServiceUnitTest {

    @Mock
    ClientRepository clientRepository;

    @InjectMocks
    FileReaderFactoryService fileReaderFactoryService;

    @BeforeEach
    void setUp() {
        fileReaderFactoryService = new FileReaderFactoryService(clientRepository);
    }

    @Test
    void testGetFactoryInstanceWithCsvFile() {
        var file = "test.csv";
        FileReaderService service  = fileReaderFactoryService.getInstance(file);
        assertThat(service).isInstanceOf(CsvFileReaderService.class);
    }
}
