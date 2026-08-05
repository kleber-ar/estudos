package com.betrybe.agrix.ebytr.staff.dto.request;

/**
 * DTO used to authenticate a user.
 */
public record LoginRequest(
    String username,
    String password) {
}
