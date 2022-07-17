package ca.jkohler.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ca.jkohler.dsmeta.entities.Sale;
import ca.jkohler.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {
	@Autowired
	private SaleRepository repository;
	public List<Sale> findSales() {
		return repository.findAll();
	}
}
