package com.betrybe.socialmedia.controller.dto;

import com.betrybe.socialmedia.entity.Profile;


public record ProfileDTO(
    Long id,
    String description,
    String photoUrl
) {

  public static ProfileDTO fromEntity(Profile profile) {
    return new ProfileDTO(
        profile.getId(),
        profile.getDescription(),
        profile.getPhotoUrl()
    );
  }

  public Profile toEntity() {
    Profile profile = new Profile();
    profile.setDescription(description);
    profile.setPhotoUrl(photoUrl);
    return profile;
  }
}
