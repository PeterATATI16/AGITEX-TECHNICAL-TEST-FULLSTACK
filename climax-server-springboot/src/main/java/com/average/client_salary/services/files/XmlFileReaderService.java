package com.average.client_salary.services.files;
import com.average.client_salary.dtos.ClientListWrapper;
import com.average.client_salary.repositories.ClientRepository;
import com.average.client_salary.services.FileReaderService;
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
