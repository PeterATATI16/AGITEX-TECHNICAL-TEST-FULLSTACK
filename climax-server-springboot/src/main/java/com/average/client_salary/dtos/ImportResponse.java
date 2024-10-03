package com.average.client_salary.dtos;

import com.average.client_salary.entities.Client;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ImportResponse {
    private String message;
    private List<Client> clients;
}