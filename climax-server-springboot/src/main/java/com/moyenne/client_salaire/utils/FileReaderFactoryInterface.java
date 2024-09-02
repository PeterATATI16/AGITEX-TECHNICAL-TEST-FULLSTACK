package com.moyenne.client_salaire.utils;
import com.moyenne.client_salaire.services.FileReaderService;

public interface FileReaderFactoryInterface {
    FileReaderService getInstance(String fileExtension);
}
