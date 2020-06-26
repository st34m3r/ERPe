package org.sid.can_db_handler_service.sec.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.sid.can_db_handler_service.sec.models.ERole;
import org.sid.can_db_handler_service.sec.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
