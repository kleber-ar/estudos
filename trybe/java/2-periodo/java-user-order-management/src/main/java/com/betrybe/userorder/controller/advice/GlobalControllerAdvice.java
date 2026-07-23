package com.betrybe.userorder.controller.advice;

import com.betrybe.userorder.controller.dto.ErrorDto;
import com.betrybe.userorder.service.exception.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalControllerAdvice {

  @ExceptionHandler(NotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  public ErrorDto handleNotFoundError(NotFoundException exception) {
    return new ErrorDto(exception.getMessage());
  }

  @ExceptionHandler(InternalError.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  public ErrorDto handleInternalError(InternalError exception) {
    return new ErrorDto(exception.getMessage());
  }
}
