package com.moyenne.client_salaire.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(FileImportException.class)
    public ResponseEntity<ApiResponse> importFileException(FileImportException e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ApiResponse(e.getMessage(),
                        LocalDateTime.now(),
                        HttpStatus.INTERNAL_SERVER_ERROR.value()
                    )
                );
    }
}
