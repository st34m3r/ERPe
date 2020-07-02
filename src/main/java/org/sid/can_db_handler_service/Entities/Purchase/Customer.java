package org.sid.can_db_handler_service.Entities.Purchase;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.sid.can_db_handler_service.Entities.User.CanUser;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@Entity
@Table
public class Customer {

	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int rowid;
	    private Date datec;

	
}