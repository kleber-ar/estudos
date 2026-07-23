package com.betrybe.socialmedia.service;

import com.betrybe.socialmedia.entity.Profile;
import com.betrybe.socialmedia.entity.User;
import com.betrybe.socialmedia.repository.ProfileRepository;
import com.betrybe.socialmedia.repository.UserRepository;
import com.betrybe.socialmedia.service.exception.ProfileNotFoundException;
import com.betrybe.socialmedia.service.exception.UserNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  private final UserRepository userRepository;
  private final ProfileRepository profileRepository;

  @Autowired
  public UserService(UserRepository userRepository, ProfileRepository profileRepository) {
    this.userRepository = userRepository;
    this.profileRepository = profileRepository;
  }


  public User findById(long id) throws UserNotFoundException {
    return userRepository.findById(id)
        .orElseThrow(UserNotFoundException::new);
  }

  public List<User> findAll() {
    return userRepository.findAll();
  }

  public User create(User user) {
    return userRepository.save(user);
  }

  public Profile createUserProfile(Profile profile, long userId) throws UserNotFoundException {
    User dbUser = findById(userId);

    profile.setUser(dbUser);

    return profileRepository.save(profile);
  }

  public Profile getUserProfile(long userId) throws UserNotFoundException, ProfileNotFoundException {
    User dbUser = findById(userId);

    /*
     Pode ser substituido por um Optional retornado pelo repositório,
     mas é necessário  aprender primeiro sobre consultas customizadas
     para poder fazer busca do profile diretamente pelo id de usuário.
     Outra opção é usar Optional.ofNullable().
     */
    Profile profile = dbUser.getProfile();
    if (profile == null) {
      throw new ProfileNotFoundException();
    }

    return profile;
  }
}
