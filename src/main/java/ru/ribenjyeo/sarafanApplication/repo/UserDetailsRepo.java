package ru.ribenjyeo.sarafanApplication.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.ribenjyeo.sarafanApplication.domain.User;

public interface UserDetailsRepo extends JpaRepository<User, String> {
}
