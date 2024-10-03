package com.average.client_salary.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class FileImportException extends Exception {
    public FileImportException(String message) {
        super(message);
    }
}
