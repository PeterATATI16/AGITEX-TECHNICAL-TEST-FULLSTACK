package com.moyenne.client_salaire;

import com.moyenne.client_salaire.entities.Client;
import com.moyenne.client_salaire.repositories.ClientRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class ClientControllerIntegrationTest {

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    MockMvc mockMvc;


    @BeforeEach
    void setUp() {
        Client client = Client.builder()
                .age(19)
                .nom("toe")
                .prenom("Jones")
                .salaire(650_000d)
                .profession("Dentiste")
                .build();
      clientRepository.save(client);
    }

    @Test
    void getClientsShouldReturnAllClients() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/clients/clients-list")
                .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$[0].nom").value("toe"))
                .andExpect(jsonPath("$[0].prenom").value("Jones"))
                .andExpect(jsonPath("$[0].salaire").value(650_000d))
                .andExpect(jsonPath("$[0].profession").value("Dentiste"))
        .andDo(print());
    }

    @AfterEach
    void clear() {
        clientRepository.deleteAll();
    }

}
