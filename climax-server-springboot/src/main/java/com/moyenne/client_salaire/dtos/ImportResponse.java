package com.moyenne.client_salaire.dtos;

import com.moyenne.client_salaire.entities.Client;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ImportResponse {
    private String message;
    private List<Client> clients;
}