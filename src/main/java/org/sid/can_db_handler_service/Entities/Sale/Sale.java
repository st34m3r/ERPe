package org.sid.can_db_handler_service.Entities.Sale;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.sid.can_db_handler_service.Entities.Categorie.Categorie_product;
import org.sid.can_db_handler_service.Entities.Invoice.Facturedet;
import org.sid.can_db_handler_service.Entities.Invoice.Facturedet_rec;
import org.sid.can_db_handler_service.Entities.Order.Commandedet;
import org.sid.can_db_handler_service.Entities.Product.Product;
import org.sid.can_db_handler_service.Entities.Supplier.Commande_fournisseurdet;
import org.sid.can_db_handler_service.Entities.Supplier.Facture_fourn_det;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Sale implements Serializable {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rowid;
	private Date saleDate;
	private double saleAmount;
	private int customerId;
	private int productId;





}
