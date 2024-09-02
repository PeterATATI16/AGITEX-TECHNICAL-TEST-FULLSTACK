package com.moyenne.client_salaire.exceptions;

import lombok.Builder;

import java.time.LocalDateTime;

@Builder
public record ApiResponse(String message,
                          LocalDateTime timestamp,
                          int status
) {
        
}