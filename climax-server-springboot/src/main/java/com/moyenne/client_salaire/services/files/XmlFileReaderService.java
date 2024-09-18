package com.moyenne.client_salaire.services.files;
import com.moyenne.client_salaire.dtos.ClientListWrapper;
import com.moyenne.client_salaire.repositories.ClientRepository;
import com.moyenne.client_salaire.services.FileReaderService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;


@Service
public class XmlFileReaderService implements FileReaderService {

    private final ClientRepository clientRepository;

    public XmlFileReaderService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public void readFile(MultipartFile file) throws Exception {
        JAXBContext jaxbContext = JAXBContext.newInstance(ClientListWrapper.class);
        Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
        ClientListWrapper wrapper = (ClientListWrapper) unmarshaller.unmarshal(file.getInputStream());
        clientRepository.saveAll(wrapper.getClients());
    }
}
