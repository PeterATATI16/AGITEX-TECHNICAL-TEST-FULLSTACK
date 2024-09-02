package com.moyenne.client_salaire.services;


import org.springframework.web.multipart.MultipartFile;


public interface FileReaderService {
    void readFile(MultipartFile file) throws Exception;
}