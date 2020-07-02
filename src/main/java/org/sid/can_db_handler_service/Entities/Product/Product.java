package org.sid.can_db_handler_service.Entities.Product;
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
import org.sid.can_db_handler_service.Entities.Supplier.Commande_fournisseurdet;
import org.sid.can_db_handler_service.Entities.Supplier.Facture_fourn_det;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="can_product")
public class Product implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rowid;
    private Date datec;
    /*foring key a faire
    private int fk_parent;
    end */
    private String ref;
    private String description;
    private double price;
    private double price_ttc;

    /* foring key a faire
    private int fk_user_author;
    end
     */
    private int tosell;
    private int tobuy;
    /* foring key a faire
    private int fk_product_type;
    end
     */
    private int seuil_stock_alerte;
    /*foring key a faire
    private int fk_barcode_type;
    end
     */   
    private float volume;
    private int volume_units;
    private int stock;
    private int finished;
    private String import_key;
    @OneToMany(mappedBy = "product" , fetch = FetchType.LAZY)
    private Set<Categorie_product> categorie_products;
    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    private Set<Facturedet> facturedets;
    @OneToMany(mappedBy = "product" , fetch = FetchType.LAZY)
    private Set<Facturedet_rec> facturedet_recs;
    @OneToMany(mappedBy = "product" , fetch = FetchType.LAZY)
    private Set<Commandedet> commandedets;
    @OneToMany(mappedBy = "product" , fetch = FetchType.LAZY)
    private Set<Product_price> product_prices;
    @OneToMany(mappedBy = "product" , fetch = FetchType.LAZY)
    private Set<Product_stock> product_stocks;
    @OneToMany(mappedBy = "product" , fetch = FetchType.LAZY)
    private Set<Commande_fournisseurdet> commande_fournisseurdets;
    @OneToMany(mappedBy = "product" , fetch = FetchType.LAZY)
    private Set<Facture_fourn_det> facture_fourn_dets;






}
