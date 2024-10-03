package com.average.client_salary.utils;
import com.average.client_salary.services.FileReaderService;

public interface FileReaderFactoryInterface {
    FileReaderService getInstance(String fileExtension);
}
