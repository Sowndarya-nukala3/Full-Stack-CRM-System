package com.agiklo.oracledatabase.configuration;
import com.agiklo.oracledatabase.entity.Employee;
import com.agiklo.oracledatabase.enums.USER_ROLE;
import com.agiklo.oracledatabase.repository.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
@Configuration
@Profile("dev")
public class LocalAdmin {
    @Bean
    CommandLineRunner seedLocalAdmin(EmployeeRepository repo, BCryptPasswordEncoder encoder,
            @Value("${CRM_ADMIN_PASSWORD:}") String password) {
        return args -> {
            if (password.isEmpty() || repo.findByEmail("admin@example.test").isPresent()) return;
            Employee employee = new Employee();
            employee.setFirstName("Local"); employee.setLastName("Admin");
            employee.setEmail("admin@example.test"); employee.setPassword(encoder.encode(password));
            employee.setUserRole(USER_ROLE.ADMIN); employee.setIsEnabled(true);
            repo.save(employee);
        };
    }
}
