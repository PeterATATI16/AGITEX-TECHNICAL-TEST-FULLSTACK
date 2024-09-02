package com.moyenne.client_salaire.dtos;


import com.moyenne.client_salaire.entities.Client;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name = "clients")
public class ClientListWrapper {

    private List<Client> clients;

    @XmlElement(name = "client")
    public List<Client> getClients() {
        return clients;
    }

    public void setClients(List<Client> clients) {
        this.clients = clients;
    }
}
