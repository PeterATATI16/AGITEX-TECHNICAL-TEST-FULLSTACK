package com.average.client_salary.dtos;


import com.average.client_salary.entities.Client;

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
}
