package com.betrybe.userorder.seed;

import com.betrybe.userorder.entity.Order;
import com.betrybe.userorder.entity.User;
import com.betrybe.userorder.repository.OrderRepository;
import com.betrybe.userorder.repository.UserRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("dev") // Executado apenas em desenvolvimento
public class DatabaseSeeder implements CommandLineRunner {

  private final UserRepository userRepository;

  private final OrderRepository orderRepository;

  @PersistenceContext
  private EntityManager entityManager;

  @Autowired
  public DatabaseSeeder(UserRepository userRepository, OrderRepository orderRepository) {
    this.userRepository = userRepository;
    this.orderRepository = orderRepository;
  }

  @Override
  @Transactional
  public void run(String... args) throws Exception {
    // Desabilitar verificações de chaves estrangeiras, antes de utilizar o TRUNCATE
    entityManager.createNativeQuery("SET FOREIGN_KEY_CHECKS = 0").executeUpdate();

    // Usar TRUNCATE para limpar as tabelas e resetar a sequência de IDs
    entityManager.createNativeQuery("TRUNCATE TABLE orders").executeUpdate();
    entityManager.createNativeQuery("TRUNCATE TABLE users").executeUpdate();

    // Reabilitar verificações de chaves estrangeiras
    entityManager.createNativeQuery("SET FOREIGN_KEY_CHECKS = 1").executeUpdate();

    LocalDateTime now = LocalDateTime.parse("2024-05-30T00:00:00");

    // Users
    User user1 = new User();
    user1.setName("Alice Silva");
    user1.setEmail("alice.silva@email.com");
    user1.setPassword("Alice1234");
    user1.setCpf("123.456.789-01");
    user1.setBirthday(LocalDate.of(1990, 7, 15));
    user1.setCreatedDate(now.minusMonths(8));

    User user2 = new User();
    user2.setName("Bruno Lima");
    user2.setEmail("bruno.lima@email.com");
    user2.setPassword("Bruno2020");
    user2.setCpf("987.654.321-09");
    user2.setBirthday(LocalDate.of(1985, 5, 20));
    user2.setCreatedDate(now.minusMonths(7));

    User user3 = new User();
    user3.setName("Carla Souza");
    user3.setEmail("carla.souza@email.com");
    user3.setPassword("Carla@2021");
    user3.setCpf("555.666.777-88");
    user3.setBirthday(LocalDate.of(2000, 1, 10));
    user3.setCreatedDate(now.minusMonths(9));

    // Save Users
    userRepository.saveAll(Arrays.asList(user1, user2, user3));

    // Orders
    List<Order> allOrders = new ArrayList<>();

    allOrders.add(new Order("Feijoada Completa", LocalDate.parse("2023-12-30"), user3));
    allOrders.add(new Order("Bife Acebolado", LocalDate.parse("2024-01-30"), user2));
    allOrders.add(new Order("Moqueca Capixaba", LocalDate.parse("2024-02-29"), user3));
    allOrders.add(new Order("Spaghetti Carbonara", LocalDate.parse("2024-03-30"), user1));
    allOrders.add(new Order("Frango à Parmegiana", LocalDate.parse("2024-04-30"), user2));
    allOrders.add(new Order("Lasanha Bolonhesa", LocalDate.parse("2024-05-30"), user1));
    allOrders.add(new Order("Pizza Margherita", LocalDate.parse("2024-06-30"), user1));
    allOrders.add(new Order("Salmão Grelhado", LocalDate.parse("2024-07-05"), user2));
    allOrders.add(new Order("Camarão na Moranga", LocalDate.parse("2024-07-10"), user3));
    allOrders.add(new Order("Risoto de Cogumelos", LocalDate.parse("2024-07-20"), user1));
    allOrders.add(new Order("Filé Mignon", LocalDate.parse("2024-07-25"), user3));
    allOrders.add(new Order("Penne à Puttanesca", LocalDate.parse("2024-07-29"), user2));

    // Save Orders
    orderRepository.saveAll(allOrders);
  }
}
