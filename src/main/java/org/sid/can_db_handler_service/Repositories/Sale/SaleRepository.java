package org.sid.can_db_handler_service.Repositories.Sale;

import org.sid.can_db_handler_service.Entities.Product.Product;
import org.sid.can_db_handler_service.Entities.Sale.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
public interface SaleRepository extends JpaRepository<Sale,Integer> {
}
