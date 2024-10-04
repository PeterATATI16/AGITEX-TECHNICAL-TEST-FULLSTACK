package com.average.client_salary.dtos;

import com.average.client_salary.entities.enums.Role;
import lombok.Data;

@Data
public class UserDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private String username;
    private Role role;

    public UserDTO(Long id, String firstName, String lastName, String username, Role role) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.role = role;
    }
}
