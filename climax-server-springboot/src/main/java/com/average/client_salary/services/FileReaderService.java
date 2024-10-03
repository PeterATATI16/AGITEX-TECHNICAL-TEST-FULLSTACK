package com.average.client_salary.services;


import org.springframework.web.multipart.MultipartFile;


public interface FileReaderService {
    void readFile(MultipartFile file) throws Exception;
}