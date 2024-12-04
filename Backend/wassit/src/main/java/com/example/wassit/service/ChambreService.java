package com.example.wassit.service;

import com.example.wassit.model.Chambre;
import com.example.wassit.repository.ChambreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ChambreService {
    @Autowired
    private ChambreRepository repository;

    public List<Chambre> getAll() {
        return repository.findAll();
    }

    public Chambre getDetails(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Chambre save(Chambre chambre) {
        return repository.save(chambre);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
