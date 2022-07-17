package ca.jkohler.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ca.jkohler.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
